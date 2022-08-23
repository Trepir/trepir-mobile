import { ActivityEvent } from '../types';

const url = 'https://trepir.herokuapp.com';
// const url = 'http://192.168.1.215:4000';

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

export const getAllActivities = async (): Promise<{ data: ActivityEvent[] | null; error: any }> => {
	try {
		const result = await fetch(`${url}/activity/all`);
		const allActivities = await result.json();
		return { data: allActivities, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};
