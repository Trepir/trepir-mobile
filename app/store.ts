import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newActivityReducer from '../features/newActivity/newActivitySlice';
import userReducer from '../features/user/userSlice';
import newAccommodationReducer from '../features/newAccommodation/newAccommodationSlice';
import newTravelReducer from '../features/newTravel/newTravelSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		newActivity: newActivityReducer,
		user: userReducer,
		newAccommodation: newAccommodationReducer,
		newTravel: newTravelReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
// Typescript has a built-in type called ReturnType.
// if we add more slices to our store, this type updates automatically.
export type RootState = ReturnType<typeof store.getState>;
