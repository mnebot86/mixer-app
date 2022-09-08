import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, 'First name is required'],
		minlength: 2,
		maxlength: 20,
		trim: true,
	},
	lastName: {
		type: String,
		required: [true, 'Last name is require'],
		maxlength: 20,
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		validate: {
			validator: validator.isEmail,
			message: 'Please provide a valid email',
		},
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		minlength: 6,
		select: false,
	},
	avatar: String,
});

userSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt(11);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
	const SECRET = process.env.JWT_SECRET;
	const LIFETIME = process.env.JWT_LIFETIME;

	return jwt.sign({ userId: this._id }, SECRET, { expiresIn: LIFETIME });
};

export default mongoose.model('User', userSchema);