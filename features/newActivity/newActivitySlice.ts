import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//THIS WILL MAYBE CHANGE OUT MOVED OUT OF HERE
interface NewActivityState {
	// value: number;
	name: string;
	duration: number;
	description: string;
	time: Date;
	creatorId: string;
	tags: string[];
	// rating,

	//LOCATION OBJECT
}

const initialState: NewActivityState = {
	name: '',
	duration: 0,
	description: '',
	time: new Date(Date.now()),
	creatorId: '',
	tags: [],
};

const newActivitySlice = createSlice({
	name: 'newActivity',
	initialState: initialState,
	reducers: {
		storeNewActivity: (state: NewActivityState) => {
			state = {
				...state,
			};
		},
		//Change Type if necessary
		clearState: (state: NewActivityState, action: PayloadAction<NewActivityState>) => {
			state = initialState;
		},
	},
});

export const { storeNewActivity, clearState } = newActivitySlice.actions;
export default newActivitySlice.reducer;
