import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = 'light';

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		storeTheme: (state: string, action: PayloadAction<string>) => action.payload,
		clearTheme: () => initialState,
	},
});

export const { storeTheme, clearTheme } = themeSlice.actions;
export default themeSlice.reducer;
