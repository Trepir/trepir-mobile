/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity, Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
export interface NewActivityState {
	name: string;
	duration: number;
	description: string;
	time: number;
	uid: string;
	tags: string[];
	// rating: number: null
	location: Location;
}

const initialState: Activity = {
	id: '',
	name: '',
	duration: 0,
	description: '',
	// timeStart: Date.now(), // Date.now(),
	// timeEnd: Date.now(), // Date.now(),
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
		storeNewActivity: (state: Activity, action: PayloadAction<Activity>) => {
			console.log('NEW ACTIVITY STORED', action.payload);
			return { ...action.payload };
		},
		// Change Type if necessary
		// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
		clearActivityState: (state: Activity) => initialState,
	},
});

export const { storeNewActivity, clearActivityState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
