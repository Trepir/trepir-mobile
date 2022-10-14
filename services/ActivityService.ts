import { ActivityEvent } from '../types';
import ApiUrl from '../constants/ApiUrl';

export const createActivityApi = async (
	activity: ActivityEvent
): Promise<{ data: ActivityEvent | null; error: any }> => {
	try {
		const result = await fetch(`${ApiUrl}/activity/create`, {
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
		const result = await fetch(`${ApiUrl}/activity/all`);
		const allActivities = await result.json();
		return { data: allActivities, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};

export const addLikedActivity = async (
	activityId: string,
	uid: string,
	tripId?: string
): Promise<{ data: ActivityEvent | null; error: any }> => {
	const bodyData = tripId !== undefined ? { activityId, uid, tripId } : { activityId, uid };

	try {
		const result = await fetch(`${ApiUrl}/activity/favorite`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(bodyData),
		});
		const newActivity = await result.json();
		return { data: newActivity, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};
