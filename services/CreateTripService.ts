import { newTripType } from '../screens/CreateScreen';

// const url = 'https://trepir.herokuapp.com/';
const url = 'http://192.168.1.215:4000';

export const createTripApi = async (trip: newTripType) => {
	const createdTrip = await fetch(`${url}/trip/create`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(trip),
	});
	const jsonCreatedTrip = await createdTrip.json();
	console.log('hello', jsonCreatedTrip);
};

/*

"message": Array [
    "uid should not be empty",
    "startDate must be a valid ISO 8601 date string",
    "startDate should not be empty",
    "endDate must be a valid ISO 8601 date string",
    "endDate should not be empty",
    "name should not be empty",
    "googlePlaceId should not be empty",
    "formattedAddress should not be empty",
    "googleLocationName should not be empty",
  ],
 */

// setNewTrip((prev) => ({
// 	...prev,
// 	travel: travelEvents,
// 	accommodation: accommodations,
// }));

// const createdTrip = await fetch('https://trepir.herokuapp.com/trip/create', {
// 	method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },
// 	body: JSON.stringify(tripData),
// });
// const jsonCreatedTrip = await createdTrip.json();
// console.log('hello', jsonCreatedTrip);
