/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityEvent } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE

const initialState: ActivityEvent = {
	id: '',
	name: '',
	duration: 0,
	description: '',
	uid: '',
	tags: [],
	imageUrl: '',
	rating: null,
	location: {
		formattedAddress: '',
		photoUrl: [],
		latitude: 0,
		longitude: 0,
		country: '',
		state: '',
		locationName: '',
		city: '',
		googleId: null,
	},
};

const newActivitySlice = createSlice({
	name: 'newActivity',
	initialState,
	reducers: {
		storeNewActivity: (state: ActivityEvent, action: PayloadAction<ActivityEvent>) => {
			console.log('NEW ACTIVITY STORED', action.payload);
			return { ...action.payload };
		},
		// Change Type if necessary
		// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
		clearActivityState: (state: ActivityEvent) => initialState,
	},
});

export const { storeNewActivity, clearActivityState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
