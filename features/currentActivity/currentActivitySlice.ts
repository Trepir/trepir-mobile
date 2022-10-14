import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DayAct } from '../../types';

const initialState: DayAct = {
	id: '',
	tripDayId: '',
	order: 0,
	accommodation: null,
	travelEvent: null,
	dayActivity: null,
};

const currentActivitySlice = createSlice({
	name: 'currentActivity',
	initialState,
	reducers: {
		storeCurrentActivity: (state: DayAct, action: PayloadAction<DayAct>) => ({ ...action.payload }),
		clearCurrentActivity: () => initialState,
	},
});

export const { storeCurrentActivity, clearCurrentActivity } = currentActivitySlice.actions;
export default currentActivitySlice.reducer;
