import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a name for bookmark'],
	},
	thumbnail: {
		type: String,
		required: [true, 'Please provide a thumbnail for bookmark'],
	},
	createdBy: {
		type: String,
		required: [true, 'Please provide user id'],
	},
});

bookmarkSchema.pre('save', async function () {
	const User = mongoose.model('User');

	const user = await User.findOne({ _id: this.createdBy });

	const favorites = user?.favorites;

	let newUser;

	if (!favorites) {
		newUser = await User.findOneAndUpdate(
			{
				_id: this.createdBy,
			},
			{
				favorites: [this._id],
			},
			{ new: true }
		);
	} else {
		newUser = await User.findOneAndUpdate(
			{ _id: this.createdBy },
			{
				favorites: [...favorites, this._id],
			},
			{ new: true }
		);
	}
});

bookmarkSchema.pre('remove', async function () {
	const User = mongoose.model('User');

	const user = await User.findOne({ _id: this.createdBy });

	const newArray = user.favorites?.filter((item) => {
		const { ObjectId } = mongoose.Types;
		return ObjectId(item).toString() !== ObjectId(this._id).toString();
	});

	await User.findOneAndUpdate(
		{ _id: this.createdBy },
		{
			favorites: [...newArray],
		}
	);
});

export default mongoose.model('Bookmark', bookmarkSchema);
