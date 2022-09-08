import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
};

const isLoadingSlice = createSlice({
	name: 'isLoading',
	initialState,
	reducers: {
		toggleIsLoading(state) {
			state.isLoading = !state.isLoading;
		},
	},
});

export const { setUser } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
