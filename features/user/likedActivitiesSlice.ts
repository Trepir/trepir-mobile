import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityEvent, DayActivityEvent } from '../../types';

export type FaveActivity = {
	activityId: string;
	id: number;
	tripId: string;
	userId: string;
	activity: ActivityEvent;
};
const initialState: FaveActivity[] = [];

const likedActivitiesSlice = createSlice({
	name: 'likedActivities',
	initialState,
	reducers: {
		storeLikedActivities: (state: FaveActivity[], action: PayloadAction<FaveActivity[]>) => [
			...action.payload,
		],

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
