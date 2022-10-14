import { Trip } from '../types';
import ApiUrl from '../constants/ApiUrl';

export const fetchTrip = async (id: string): Promise<{ data: Trip | null; error: any }> => {
	try {
		const data = await fetch(`${ApiUrl}/trip/tripById/${id}`, {
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
