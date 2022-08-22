import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityEvent } from '../../types';

const initialState: ActivityEvent = {
	id: '',
	uid: '',
	name: '',
	duration: 0,
	description: '',
	rating: 0,
	tags: [],
	location: {
		latitude: 0,
		longitude: 0,
		formattedAddress: '',
		photoUrl: [],
		country: '',
		state: '',
		locationName: '',
		city: '',
		googleId: null,
	},
	imageUrl: '',
	time: undefined,
};

const currentActivitySlice = createSlice({
	name: 'currentActivity',
	initialState,
	reducers: {
		storeCurrentActivity: (state: ActivityEvent, action: PayloadAction<ActivityEvent>) => {
			console.log('Payload: ', action.payload);
			return { ...action.payload };
		},
		clearCurrentActivity: () => initialState,
	},
});

export const { storeCurrentActivity, clearCurrentActivity } = currentActivitySlice.actions;
export default currentActivitySlice.reducer;
