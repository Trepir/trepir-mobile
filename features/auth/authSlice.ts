/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface AuthState {
	token: string | null;
}

const initialState: AuthState = {
	token: null,
};

const newAuthSlice = createSlice({
	name: 'AuthInfo',
	initialState,
	reducers: {
		storeNewAuth: (state: AuthState, action: PayloadAction<AuthState>) => {
			console.log(action.payload);
			state = { ...action.payload };
		},
		// Change Type if necessary
		clearAuthState: (state: AuthState) => {
			// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
			state = initialState;
		},
	},
});

export const { storeNewAuth, clearAuthState } = newAuthSlice.actions;
export default newAuthSlice.reducer;
