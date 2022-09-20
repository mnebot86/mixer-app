import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	name: null,
};

const paramSlice = createSlice({
	name: 'param',
	initialState,
	reducers: {
		setParamId: (state, action) => {
			state.id = action.payload;
		},
		setParamName: (state, action) => {
			state.name = action.payload;
		},
	},
});

export const { setParamId, setParamName } = paramSlice.actions;
export default paramSlice.reducer;
