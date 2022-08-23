import { TripDay } from '../types';

function compare(a: any, b: any) {
	if (a.order < b.order) {
		return -1;
	}
	if (a.order > b.order) {
		return 1;
	}
	return 0;
}
export const sortDay = (tripDay: TripDay) => {
	if (tripDay.tripDayActivities.length === 0) return [];
	return tripDay.tripDayActivities.sort(compare);
};
