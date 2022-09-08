import User from '../models/users.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';
const register = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	if (!firstName || !lastName || !email || !password) {
		throw new BadRequestError('Please provide all values');
	}

	const userAlreadyExists = await User.findOne({ email });

	if (userAlreadyExists) {
		throw new BadRequestError('Email already in use');
	}
	const user = await User.create({ firstName, lastName, email, password });

	const token = user.createJWT();

	res.status(StatusCodes.CREATED).json({
		user: {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
		},
		token,
	});
};

const login = async (req, res) => {
	res.send('login user');
};

const updateUser = async (req, res) => {
	res.send('updateUser user');
};

export { register, login, updateUser };
