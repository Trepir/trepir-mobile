import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface NewActivityState {
	// value: number;
	name: string;
	duration: number;
	description: string;
	// time: string;
	time: number;
	creatorId: string;
	tags: string[];
	// rating,

	// LOCATION OBJECT
}

const initialState: NewActivityState = {
	name: '',
	duration: 0,
	description: '',
	time: Date.now(),
	// time: String(new Date(Date.now())),
	creatorId: '',
	tags: [],
};

const newActivitySlice = createSlice({
	name: 'newActivity',
	initialState,
	reducers: {
		storeNewActivity: (state: NewActivityState, action: PayloadAction<NewActivityState>) => {
			console.log(action.payload);
			state = { ...action.payload };
		},
		// Change Type if necessary
		clearState: (state: NewActivityState) => {
			state = initialState;
		},
	},
});

export const { storeNewActivity, clearState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
