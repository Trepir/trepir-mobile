import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface NewTravelState {
	type: string;
	departure: number;
	origin: Location;
	destination: Location;
	flightNum?: number | null;
	creatorId: string;
}

const initialState: NewTravelState = {
	type: '',
	departure: 0,
	creatorId: '',
	origin: {
		latitude: 0,
		longitude: 0,
		country: '',
		state: '',
		locationName: '',
		city: '',
		googleId: null,
	},
	destination: {
		latitude: 0,
		longitude: 0,
		country: '',
		state: '',
		locationName: '',
		city: '',
		googleId: null,
	},
	flightNum: null,
};

const newActivitySlice = createSlice({
	name: 'newAccommodation',
	initialState,
	reducers: {
		storeNewTravel: (state: NewTravelState, action: PayloadAction<NewTravelState>) => {
			console.log(action.payload);
			state = { ...action.payload };
		},
		// Change Type if necessary
		clearState: (state: NewTravelState) => {
			state = initialState;
		},
	},
});

export const { storeNewTravel, clearState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
