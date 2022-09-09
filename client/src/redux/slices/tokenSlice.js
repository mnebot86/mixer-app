import { createSlice } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

const initialState = {
	token: null,
};

const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		setToken: async (state, action) => {
			state.token = action.payload;
			await SecureStore.setItemAsync('key', action.payload);
		},
	},
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
