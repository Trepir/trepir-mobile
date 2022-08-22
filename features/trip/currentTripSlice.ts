import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Trip } from '../../types';

const initialState: Trip = {
	uid: '',
	id: '',
	createdAt: '',
	userId: '',
	startDate: '',
	endDate: '',
	name: '',
	googlePlaceId: '',
	latitude: 0,
	longitude: 0,
	photoUrl: '',
	formattedAddress: '',
	googleLocationName: '',
	tripDay: [],
	favouriteActivities: [],
};

const currentTripSlice = createSlice({
	name: 'currentTrip',
	initialState,
	reducers: {
		storeCurrentTrip: (state: Trip, action: PayloadAction<Trip>) => {
			console.log('Payload: ', action.payload);
			return { ...action.payload };
		},
		clearCurrentTrip: () => initialState,
	},
});

export const { storeCurrentTrip, clearCurrentTrip } = currentTripSlice.actions;
export default currentTripSlice.reducer;
