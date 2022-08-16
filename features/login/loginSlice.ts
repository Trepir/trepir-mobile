import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface LoginState {
	username: string;
	email: string;
	password: string;
}

const initialState: LoginState = {
	username: '',
	email: '',
	password: '',
};

const newLoginSlice = createSlice({
	name: 'UserInfo',
	initialState,
	reducers: {
		StoreNewUserInfo: (state: LoginState, action: PayloadAction<LoginState>) => {
			console.log(action.payload);
			state = { ...action.payload };
		},
		// Change Type if necessary
		clearState: (state: LoginState) => {
			state = initialState;
		},
	},
});

export const { StoreNewUserInfo, clearState } = newLoginSlice.actions;
export default newLoginSlice.reducer;
