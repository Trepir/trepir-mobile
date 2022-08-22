import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
export interface NewTravelState {
	type: string;
	departure: string;
	originLocation: Location;
	destinationLocation: Location;
	flightNum?: number | null;
	uid: string;
}

const initialState: NewTravelState = {
	type: '',
	departure: '',
	uid: '',
	originLocation: {
		latitude: 0,
		longitude: 0,
		country: '',
		state: '',
		locationName: '',
		city: '',
		googleId: null,
		formattedAddress: '',
		photoUrl: [],
	},
	destinationLocation: {
		latitude: 0,
		longitude: 0,
		country: '',
		state: '',
		locationName: '',
		city: '',
		googleId: null,
		formattedAddress: '',
		photoUrl: [],
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
