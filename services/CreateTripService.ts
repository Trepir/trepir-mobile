import { newTripType } from '../screens/CreateScreen';

const url = 'https://trepir.herokuapp.com';
// const url = 'http://192.168.1.215:4000';

export const createTripApi = async (
	trip: newTripType
): Promise<{ data: newTripType | null; error: any }> => {
	try {
		const createdTrip = await fetch(`${url}/trip/create`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(trip),
		});
		const jsonCreatedTrip = await createdTrip.json();
		return { data: jsonCreatedTrip, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};

export const createActivityApi = async (
	activity: Activity
): Promise<{ data: Activity | null; error: any }> => {
	try {
		const result = await fetch(`${url}/activity/create`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(activity),
		});
		const newActivity = await result.json();
		console.log('NEW ACTIVITY ===========>', newActivity);
		return { data: newActivity, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};
