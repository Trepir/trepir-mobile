import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
export interface NewTravelState {
	type: string;
	departure: number;
	origin: Location;
	destination: Location;
	flightNum?: number | null;
	uid: string;
}

const initialState: NewTravelState = {
	type: '',
	departure: Date.now(),
	uid: '',
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
			return { ...action.payload };
		},
		// Change Type if necessary
		clearTravelState: (state: NewAccommodationState) => initialState,
	},
});

export const { storeNewTravel, clearTravelState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
