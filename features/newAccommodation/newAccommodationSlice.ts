import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
export interface NewAccommodationState {
	date: string;
	// endDate: string;
	location: Location;
	uid: string;
}

const initialState: NewAccommodationState = {
	date: '',
	// endDate: '',
	uid: '',
	location: {
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
};

const newAAccommodationSlice = createSlice({
	name: 'newAccommodation',
	initialState,
	reducers: {
		storeNewAccommodation: (
			state: NewAccommodationState,
			action: PayloadAction<NewAccommodationState>
		) => {
			console.log('NEW ACCOMMODATION STORED =>', action.payload);
			// eslint-disable-next-line no-param-reassign
			return { ...action.payload };
		},
		// Change Type if necessary
		clearAccommodationState: (state: NewAccommodationState) => initialState,
	},
});

export const { storeNewAccommodation, clearAccommodationState } = newAAccommodationSlice.actions;
export default newAAccommodationSlice.reducer;
