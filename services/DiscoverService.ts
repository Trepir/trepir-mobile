import { ActivityEvent, Viewport } from '../types';

export const activitiesFromViewport = async (
	viewport: Viewport
): Promise<{ data: ActivityEvent[] | null; error: any }> => {
	try {
		const data = await fetch(`https://trepir.herokuapp.com/activity/coordinates`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(viewport),
		});
		const activitiesByLocation: ActivityEvent[] = await data.json();
		console.log('ACTIVITIES BY LOCATION => ', activitiesByLocation[0]);
		return { data: activitiesByLocation, error: null };
	} catch (error) {
		console.log('services/user/FetchUser', error);
		return { data: null, error };
	}
};
