import mongoose from 'mongoose';
import Drink from '../models/drinks.js';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const mongoString = process.env.MONGOOSE_URL;

let saveCounter = 0;

mongoose
	.connect(mongoString)
	.then(() => console.log('mongodb connection success'))
	.catch((error) => console.log(error));

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z';

const fetchDrinks = async () => {
	const getDrinks = await axios.get(url);

	let drinks = [...getDrinks.data.drinks];

	for (let i = 0; i < drinks.length; i++) {
		let mixDrink = new Drink({
			name: drinks[i].strDrink,
			category: [drinks[i].strCategory],
			thumbNail: drinks[i].strDrinkThumb,
			video: drinks[i].strVideo,
			glass: drinks[i].strGlass,
			ingredients: [
				{
					amount: drinks[i][`strMeasure${i}`],
					name: drinks[i][`strIngredient${i}`],
				},
			],
			instructions: drinks[i].strInstructions,
			tags: [drinks[i].strTags],
		});

		mixDrink.save(() => {
			console.log('saved', mixDrink);
			saveCounter++;

			if (saveCounter === drinks.length) {
				mongoose
					.disconnect()
					.then(() => {
						console.log(
							'saved successfully and mongodb disconnected'
						);
					})
					.catch((error) => console.log(error));
			}
		});
	}
};

fetchDrinks();
