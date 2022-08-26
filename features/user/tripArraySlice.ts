import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TripBasicState } from '../../types';

const initialState: TripBasicState[] = [];

const tripArraySlice = createSlice({
	name: 'tripArary',
	initialState,
	reducers: {
		storeArrayTrip: (state: TripBasicState[], action: PayloadAction<TripBasicState[]>) => [
			...action.payload,
		],
		clearArrayTrip: () => initialState,
	},
});

export const { storeArrayTrip, clearArrayTrip } = tripArraySlice.actions;
export default tripArraySlice.reducer;
