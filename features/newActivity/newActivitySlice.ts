/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface NewActivityState {
	name: string;
	duration: number;
	description: string;
	time: number;
	uid: string;
	tags: string[];
	// rating: number: null
	location: Location;
}

const initialState: NewActivityState = {
	name: '',
	duration: 0,
	description: '',
	time: Date.now(),
	uid: '',
	tags: [],
	location: {
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
		storeNewActivity: (state: NewActivityState, action: PayloadAction<NewActivityState>) => {
			console.log(action.payload);
			return { ...action.payload };
		},
		// Change Type if necessary
		// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
		clearActivityState: (state: NewActivityState) => initialState,
	},
});

export const { storeNewActivity, clearActivityState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
