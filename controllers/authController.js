import User from '../models/users.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
	const { firstName, lastName, email, password, avatar, favorites } =
		req.body;

	if (!firstName || !lastName || !email || !password) {
		throw new BadRequestError('Please provide all values');
	}

	const userAlreadyExists = await User.findOne({ email });

	if (userAlreadyExists) {
		throw new BadRequestError('Email already in use');
	}
	const user = await User.create({
		firstName,
		lastName,
		email,
		password,
		avatar,
		favorites,
	});

	const token = user.createJWT();

	res.status(StatusCodes.CREATED).json({
		user: {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			avatar: user.avatar,
			favorites: [...user.favorites],
		},
		token,
	});
};

const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		throw new BadRequestError('Please provide all values');
	}

	const user = await User.findOne({ email }).select('+password');

	if (!user) {
		throw new UnauthenticatedError('Invalid Credentials');
	}

	const isPasswordCorrect = await user.comparePassword(password);

	if (!isPasswordCorrect) {
		throw new UnauthenticatedError('Invalid Credentials');
	}

	const token = user.createJWT();

	user.password = undefined;

	res.status(StatusCodes.OK).json({ user, token });
};

const updateUser = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		throw new BadRequestError('Please provide user id');
	}

	const user = await User.findByIdAndUpdate(id, req.body, { new: true });

	res.status(StatusCodes.OK).json({ user });
};

const verifyUser = async (req, res) => {
	const { token } = req.body;
	const { userId } = jwt.decode(token);

	if (userId) {
		const user = await User.findOne({ _id: userId });
		res.status(StatusCodes.OK).json({ user });
	}
};

export { register, login, updateUser, verifyUser };
