import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TravelState } from '../../types';

const initialState: TravelState = {
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
		storeNewTravel: (state: TravelState, action: PayloadAction<TravelState>) => {
			console.log(action.payload);
			return { ...action.payload };
		},
		// Change Type if necessary
		clearTravelState: (state: TravelState) => initialState,
	},
});

export const { storeNewTravel, clearTravelState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
