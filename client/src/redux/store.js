import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import isLoadingSlice from './slices/loadingSlice';
import alertSlice from './slices/alertSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		isLoading: isLoadingSlice,
		alertSlice: alertSlice,
	},
});
