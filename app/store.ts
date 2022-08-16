import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newActivityReducer from '../features/newActivity/newActivitySlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		newActivity: newActivityReducer,
		auth: authReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
// Typescript has a built-in type called ReturnType.
// if we add more slices to our store, this type updates automatically.
export type RootState = ReturnType<typeof store.getState>;
