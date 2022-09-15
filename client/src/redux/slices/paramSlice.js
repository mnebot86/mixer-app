import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
};

const paramSlice = createSlice({
	name: 'param',
	initialState,
	reducers: {
		setParamId: (state, action) => {
			state.id = action.payload;
		},
	},
});

export const { setParamId } = paramSlice.actions;
export default paramSlice.reducer;
