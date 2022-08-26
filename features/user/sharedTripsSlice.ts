import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TripBasicState } from '../../types';

const initialState: TripBasicState[] = [];

const sharedTripsSlice = createSlice({
	name: 'sharedTrips',
	initialState,
	reducers: {
		storeSharedTrips: (state: TripBasicState[], action: PayloadAction<TripBasicState[]>) => [
			...action.payload,
		],
		clearSharedTrips: () => initialState,
	},
});

export const { storeSharedTrips, clearSharedTrips } = sharedTripsSlice.actions;
export default sharedTripsSlice.reducer;
