import { Trip } from '../types';

export const fetchTrip = async (id: string): Promise<{ data: Trip | null; error: any }> => {
	try {
		const data = await fetch(`https://trepir.herokuapp.com/trip/tripById/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const trip: Trip = await data.json();
		return { data: trip, error: null };
	} catch (error) {
		console.log('services/user/FetchUser', error);
		return { data: null, error };
	}
};
