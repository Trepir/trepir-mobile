import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityEvent } from '../../types';

const initialState: ActivityEvent[] = [];

const likedActivitiesSlice = createSlice({
	name: 'likedActivities',
	initialState,
	reducers: {
		storeLikedActivities: (state: ActivityEvent[], action: PayloadAction<ActivityEvent[]>) => {
			// console.log('Payload (storeLikedActivities): ', action.payload);
			return [...action.payload];
		},
		clearLikedActivities: () => initialState,
		addLikedActivity: (state: ActivityEvent[], action: PayloadAction<ActivityEvent>) => {
			console.log('Payload (addLikedActivity): ', action.payload);
			return [...state, action.payload];
		},
		removeLikedActivity: (state: ActivityEvent[], action: PayloadAction<ActivityEvent>) => {
			console.log('Payload (removeLikedActivity): ', action.payload);
			return state.filter((activity) => activity.id !== action.payload.id);
		},
		modifyLikedActivity: (state: ActivityEvent[], action: PayloadAction<ActivityEvent>) => {
			console.log('Payload (modifyLikedActivity): ', action.payload);
			return state.map((activity) =>
				activity.id === action.payload.id ? action.payload : activity
			);
		},
	},
});

export const { storeLikedActivities, clearLikedActivities } = likedActivitiesSlice.actions;
export default likedActivitiesSlice.reducer;
