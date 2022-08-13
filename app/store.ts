import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import pokemonReducer from '../features/pokemons/pokemonSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		// pokemon: pokemonReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
// Typescript has a built-in type called ReturnType.
// if we add more slices to our store, this type updates automatically.
export type RootState = ReturnType<typeof store.getState>;
