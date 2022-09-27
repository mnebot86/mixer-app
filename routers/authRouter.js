import express from 'express';
import {
	register,
	login,
	updateUser,
	verifyUser,
} from '../controllers/authController.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser/:id').patch(updateUser);
router.route('/verifyUser').post(verifyUser);

export default router;
