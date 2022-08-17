import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
export interface NewAccommodationState {
	startDate: number;
	endDate: number;
	location: Location;
	uid: string;
}

const initialState: NewAccommodationState = {
	startDate: Date.now(),
	endDate: Date.now(),
	uid: '',
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
	name: 'newAccommodation',
	initialState,
	reducers: {
		storeNewAccommodation: (
			state: NewAccommodationState,
			action: PayloadAction<NewAccommodationState>
		) => {
			console.log(action.payload);
			// eslint-disable-next-line no-param-reassign
			return { ...action.payload };
		},
		// Change Type if necessary
		clearState: (state: NewAccommodationState) => initialState,
	},
});

export const { storeNewAccommodation, clearState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
