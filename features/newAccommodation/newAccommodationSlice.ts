import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface NewAccommodationState {
	startDate: number;
	endDate: number;
	location: Location;
	creatorId: string;
}

const initialState: NewAccommodationState = {
	startDate: Date.now(),
	endDate: Date.now(),
	creatorId: '',
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
			state = { ...action.payload };
		},
		// Change Type if necessary
		clearState: () => initialState,
	},
});

export const { storeNewAccommodation, clearState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
