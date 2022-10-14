import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccommodationState } from '../../types';

const initialState: AccommodationState = {
	startDate: '',
	endDate: '',
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

const newAccommodationSlice = createSlice({
	name: 'newAccommodation',
	initialState,
	reducers: {
		storeNewAccommodation: (
			state: AccommodationState,
			action: PayloadAction<AccommodationState>
		) => ({ ...action.payload }),
		clearAccommodationState: () => initialState,
	},
});

export const { storeNewAccommodation, clearAccommodationState } = newAccommodationSlice.actions;
export default newAccommodationSlice.reducer;
