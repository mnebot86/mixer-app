import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import tokenSlice from './slices/tokenSlice';
import isLoadingSlice from './slices/loadingSlice';
import alertSlice from './slices/alertSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		token: tokenSlice,
		isLoading: isLoadingSlice,
		alertSlice: alertSlice,
	},
});
