import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface NewActivityState {
	name: string;
	duration: number;
	description: string;
	time: number;
	creatorId: string;
	tags: string[];
	// rating: number: null
	location: Location;
}

const initialState: NewActivityState = {
	name: '',
	duration: 0,
	description: '',
	time: Date.now(),
	creatorId: '',
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
			state = { ...action.payload };
		},
		// Change Type if necessary
		clearState: (state: NewActivityState) => {
			state = initialState;
		},
	},
});

export const { storeNewActivity, clearState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
