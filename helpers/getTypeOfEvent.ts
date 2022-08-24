import { DayAct } from '../types';

export const typeOfEvent = (item: DayAct) => {
	if (item.accommodation !== null) return 'Accommodation';
	if (item.dayActivity !== null) return 'Activity';
	return 'TravelEvent';
};
