import { newTripType } from '../screens/CreateScreen';

const url = 'https://trepir.herokuapp.com';
// const url = 'http://192.168.1.215:4000';

export const createTripApi = async (trip: newTripType) => {
	const createdTrip = await fetch(`${url}/trip/create`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(trip),
	});
	const jsonCreatedTrip = await createdTrip.json();
	console.log('hello', jsonCreatedTrip);
};
