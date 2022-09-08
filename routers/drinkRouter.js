import express from 'express';
import {
	createDrink,
	deleteDrink,
	getAllDrinks,
	updateDrink,
	getDrink,
} from '../controllers/drinksControllers.js';

const router = express.Router();

router.route('/').post(createDrink).get(getAllDrinks);
router.route('/:id').get(getDrink).delete(deleteDrink).patch(updateDrink);

export default router;
