import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TripValidationState {
	startingDate: string;
	endingDate: string;
}

const initialState: TripValidationState = {
	startingDate: '',
	endingDate: '',
};

const TripValidationSlice = createSlice({
	name: 'createTripValidation',
	initialState,
	reducers: {
		addDates: (state: TripValidationState, action: PayloadAction<TripValidationState>) => ({
			...action.payload,
		}),
		clearDates: () => initialState,
	},
});

export const { addDates, clearDates } = TripValidationSlice.actions;
export default TripValidationSlice.reducer;
