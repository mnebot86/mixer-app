import Bookmark from '../models/bookmark.js';
import { StatusCodes } from 'http-status-codes';
import BadRequestError from '../errors/BadRequestError.js';

const getAllUserBookMark = async (req, res) => {
	const { userId } = req.params;
	const bookmarks = await Bookmark.find({ createdBy: userId });

	if (bookmarks.length < 1) {
		throw new BadRequestError('There are no Bookmarks saved');
	}

	res.status(StatusCodes.OK).json({ bookmarks });
};

const createBookmark = async (req, res) => {
	const { name, thumbnail, createdBy } = req.body;

	if (!name || !thumbnail || !createdBy) {
		throw new BadRequestError('Please provide name and thumbnail');
	}

	const bookmark = await Bookmark.create({ ...req.body });

	res.status(StatusCodes.CREATED).json({ bookmark });
};

const deleteBookmark = async (req, res) => {
	const { id } = req.params;
	const { createdBy } = req.body;

	if (!id) {
		throw new BadRequestError('Please provide name and thumbnail');
	}

	const bookmark = await Bookmark.findOne({ _id: id });

	if (!bookmark?.createdBy) {
		throw new BadRequestError("Bookmark doesn't exist");
	}

	if (createdBy !== bookmark?.createdBy) {
		throw new BadRequestError('Not authorize to delete');
	}

	if (!bookmark) {
		throw new BadRequestError(`Bookmark id: ${id} doesn't exist`);
	}

	await bookmark.remove();

	res.status(StatusCodes.OK).json({
		msg: `Bookmark Id: ${id} has been remove`,
	});
};

export { createBookmark, deleteBookmark, getAllUserBookMark };
