import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a name for this drink'],
	},
	category: [
		{
			type: String,
			required: [true, 'Please provide a category for this drink'],
		},
	],
	thumbNail: {
		type: String,
		required: [true, 'Please provide a image'],
	},
	video: {
		type: String,
	},
	glass: {
		type: String,
		required: [true, 'Please provide a recommended glassware'],
	},
	ingredients: {
		type: [
			{
				amount: String,
				name: String,
			},
		],
		required: [true, 'Please provide all ingredients'],
	},
	instructions: {
		type: String,
		required: [true, 'Please provide a stir instruction'],
	},
	tags: [
		{
			type: String,
		},
	],
});

export default mongoose.model('Drink', drinkSchema);
