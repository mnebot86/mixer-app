import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import 'express-async-errors';

dotenv.config();

//Constants
const app = express();
const port = process.env.PORT;
const mongoString = process.env.MONGOOSE_URL;

//db and authenticateUser
import connectDB from './db/connect.js';

//routers
import authRouter from './routers/authRouter.js';
import drinkRouter from './routers/drinkRouter.js';
import bookmarkRouter from './routers/bookmarkRouter.js';

//Middleware
import {
	errorHandlerMiddleware,
	notFoundMiddleware,
} from './middleware/index.js';

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

app.use(express.json());
//Proxy instead of cors

//Routes
app.get('/api/v1', (req, res) => {
	res.json({ msg: 'API' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/drinks', drinkRouter);
app.use('/api/v1/bookmarks', bookmarkRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		await connectDB(mongoString);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
