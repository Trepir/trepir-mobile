import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface AuthState {
	token: string | null;
}

const initialState: AuthState = {
	token: null,
};

const newAuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		storeNewAuth: (state: AuthState, action: PayloadAction<string | null>) => {
			console.log('Payload', action.payload);
			return { token: action.payload };
		},
		// Change Type if necessary
		clearAuthState: () => initialState,
	},
});

export const { storeNewAuth, clearAuthState } = newAuthSlice.actions;
export default newAuthSlice.reducer;
