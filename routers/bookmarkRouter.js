import express from 'express';
import {
	createBookmark,
	deleteBookmark,
	getAllUserBookMark,
} from '../controllers/bookmarkController.js';

const router = express.Router({ mergeParams: true });

router.route('/').post(createBookmark);
router.route('/:id').delete(deleteBookmark);
router.route('/:userId/bookmarks').get(getAllUserBookMark);

export default router;
