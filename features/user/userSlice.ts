import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
const initialState: UserState = {
	uid: '',
	createdAt: '',
	firstName: '',
	lastName: '',
	displayName: '',
	email: '',
	photoUrl: '',
	emailVerified: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		storeUser: (state: UserState, action: PayloadAction<UserState>) => {
			console.log('Payload', action.payload);
			return { ...action.payload };
		},
		clearUserState: () => initialState,
	},
});

export const { storeUser, clearUserState } = userSlice.actions;
export default userSlice.reducer;
