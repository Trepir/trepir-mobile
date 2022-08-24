import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityEvent, DayActivityEvent } from '../../types';

const initialState: ActivityEvent[] = [];

const likedActivitiesSlice = createSlice({
	name: 'likedActivities',
	initialState,
	reducers: {
		storeLikedActivities: (state: ActivityEvent[], action: PayloadAction<DayActivityEvent[]>) => {
			const newPayload = action.payload.map((activity: DayActivityEvent) => activity.activity);
			console.log('NEW PAYLOAD ======>', newPayload);
			return [...newPayload];
		},
		clearLikedActivities: () => initialState,
		// addLikedActivity: (state: ActivityEvent[], action: PayloadAction<DayActivityEvent>) => {
		// 	return [...state, action.payload];
		// },
		// removeLikedActivity: (state: ActivityEvent[], action: PayloadAction<DayActivityEvent>) => {
		// 	return state.filter((activity) => activity.id !== action.payload.id);
		// },
		// modifyLikedActivity: (state: ActivityEvent[], action: PayloadAction<DayActivityEvent>) => {
		// 	return state.map((activity) =>
		// 		activity.id === action.payload.id ? action.payload : activity
		// 	);
		// },
	},
});

export const { storeLikedActivities, clearLikedActivities } = likedActivitiesSlice.actions;
export default likedActivitiesSlice.reducer;
