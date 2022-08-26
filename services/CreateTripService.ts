import { async } from '@firebase/util';
import { newTripType } from '../screens/CreateScreen';
import { ActivityEvent } from '../types';

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
	activity: ActivityEvent
): Promise<{ data: ActivityEvent | null; error: any }> => {
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
type AddActToFavType = {
	favoriteId: number[];
	tripId: string;
};

export const addActivitiesToTripFav = async (addFavObject: AddActToFavType): Promise<any> => {
	try {
		const result = await fetch(`${url}/activity/initialFavoriteActivities`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(addFavObject),
		});
		const fav = await result.json();
		console.log(fav);
		return { data: fav, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};
