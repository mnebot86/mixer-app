import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	alertType: '',
	alertText: '',
};

const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		setAlertType: (state, action) => {
			state.alertType = action.payload;
		},
		setAlertText: (state, action) => {
			state.alertText = action.payload;
		},
		clearAlert: (state) => {
			state.alertText = '';
			state.alertType = '';
		},
	},
});

export const { setAlertType, setAlertText, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
