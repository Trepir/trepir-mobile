import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User } from '../../types';

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
		storeUser: (state: UserState, action: PayloadAction<User>) => {
			const { uid, createdAt, firstName, lastName, displayName, email, photoUrl, emailVerified } =
				action.payload;
			const dotIndex = photoUrl.lastIndexOf('.');
			const photoUrlNoExt = photoUrl.substring(0, dotIndex);
			const newPhotoUrl = `${photoUrlNoExt}.png`;
			const newState: UserState = {
				...state,
				uid,
				createdAt,
				firstName,
				lastName,
				displayName,
				email,
				photoUrl: newPhotoUrl,
				emailVerified,
			};
			// console.log('Payload: ', action.payload);
			// console.log('New State: ', newState);

			return { ...newState };
		},
		clearUserState: () => initialState,
	},
});

export const { storeUser, clearUserState } = userSlice.actions;
export default userSlice.reducer;
