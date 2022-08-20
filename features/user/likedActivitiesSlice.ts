import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '../../types';

const initialState: Activity[] = [];

const likedActivitiesSlice = createSlice({
	name: 'likedActivities',
	initialState,
	reducers: {
		storeLikedActivities: (state: Activity[], action: PayloadAction<Activity[]>) => {
			console.log('Payload (storeLikedActivities): ', action.payload);
			return [...action.payload];
		},
		clearLikedActivities: () => initialState,
		addLikedActivity: (state: Activity[], action: PayloadAction<Activity>) => {
			console.log('Payload (addLikedActivity): ', action.payload);
			return [...state, action.payload];
		},
		removeLikedActivity: (state: Activity[], action: PayloadAction<Activity>) => {
			console.log('Payload (removeLikedActivity): ', action.payload);
			return state.filter((activity) => activity.id !== action.payload.id);
		},
		modifyLikedActivity: (state: Activity[], action: PayloadAction<Activity>) => {
			console.log('Payload (modifyLikedActivity): ', action.payload);
			return state.map((activity) =>
				activity.id === action.payload.id ? action.payload : activity
			);
		},
	},
});

export const { storeLikedActivities, clearLikedActivities } = likedActivitiesSlice.actions;
export default likedActivitiesSlice.reducer;
