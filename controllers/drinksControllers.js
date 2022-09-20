import Drink from '../models/drinks.js';
import { StatusCodes } from 'http-status-codes';
import BadRequestError from '../errors/BadRequestError.js';

const createDrink = async (req, res) => {
	const { name } = req.body;

	const nameAlreadyExist = await Drink.findOne({ name });

	if (!!nameAlreadyExist) {
		throw new BadRequestError('Drink name already in use');
	}

	const drink = await Drink.create({ ...req.body });

	res.status(StatusCodes.CREATED).json({ drink });
};

const getDrink = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		throw new BadRequestError('Please provide id');
	}

	const drink = await Drink.findById({ _id: id });

	if (!drink) {
		throw new BadRequestError(`Drink id: ${id} doesn't exist`);
	}

	res.status(StatusCodes.OK).json({ drink });
};

const getAllDrinks = async (req, res) => {
	const drinks = await Drink.find({});
	res.status(StatusCodes.OK).json({ drinks });
};

const updateDrink = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		throw new BadRequestError('Please provide drink id');
	}

	const drink = await Drink.findByIdAndUpdate(id, req.body, { new: true });

	res.status(StatusCodes.OK).json({ drink });
};

const deleteDrink = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		throw new BadRequestError('Please provide drink id');
	}

	const drink = await Drink.findByIdAndRemove(id);

	if (!drink) {
		throw new BadRequestError(`Drink id: ${id} doesn't exist`);
	}

	res.status(StatusCodes.OK).json({
		msg: `Drink id: ${id} has been deleted`,
	});
};

export { createDrink, deleteDrink, getAllDrinks, updateDrink, getDrink };
