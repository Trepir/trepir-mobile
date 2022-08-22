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

const newAAccommodationSlice = createSlice({
	name: 'newAccommodation',
	initialState,
	reducers: {
		storeNewAccommodation: (
			state: AccommodationState,
			action: PayloadAction<AccommodationState>
		) => {
			console.log('NEW ACCOMMODATION STORED =>', action.payload);
			// eslint-disable-next-line no-param-reassign
			return { ...action.payload };
		},
		// Change Type if necessary
		clearAccommodationState: (state: AccommodationState) => initialState,
	},
});

export const { storeNewAccommodation, clearAccommodationState } = newAAccommodationSlice.actions;
export default newAAccommodationSlice.reducer;
