// import { Trip } from '../types';

import { ActivityEvent, DayAct, Location } from '../types';

const url = 'https://trepir.herokuapp.com';
// const url = 'http://192.168.1.215:4000';

type AddActivityType = {
	tripDayId: string;
	activityId: string;
	time?: number;
};

export const addActivityToTrip = async (
	activityInfo: AddActivityType
): Promise<{ data: DayAct | null; error: any }> => {
	console.log('WHAT I SEND activity =>>>>>>', activityInfo);
	try {
		const result = await fetch(`${url}/trip/addActivity`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(activityInfo),
		});
		const linkedActivity = await result.json();
		console.log('ADD ACTIVITY DATA', linkedActivity);
		return { data: linkedActivity, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};

type AddAccommodationType = {
	uid: string;
	location: Location;
	tripId: string;
	startDate: string;
	endDate: string;
};

export const addAccommodationToTrip = async (
	newAccommodation: AddAccommodationType
): Promise<any> => {
	console.log('WHAT I SEND ACCOMMODATION =>>>>>>', newAccommodation);
	try {
		const result = await fetch(`${url}/trip/addAccommodation`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newAccommodation),
		});
		console.log('ADD ACCOMMODATION RESULT', result);
		const data = await result.text();
		console.log('ADD ACCOMMODATION DATA', data);
	} catch (error) {
		console.error(error);
	}
};

type AddTravelType = {
	uid: string;
	travelType: string;
	origin: Location;
	destination: Location;
	tripId: string;
	departure: string;
	flightNum?: string | number | null | undefined;
};

type addTravelResultType = {
	id: string;
	tripDayId: string;
	order: number;
};

export const addTravelToTrip = async (
	newTravel: AddTravelType
): Promise<{ data: addTravelResultType | null; error: any }> => {
	console.log('WHAT I SEND TRAVEL =>>>>>>', newTravel);

	try {
		const result = await fetch(`${url}/trip/addTravelEvent`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTravel),
		});
		const travel: addTravelResultType = await result.json();
		console.log('ADD TRAVEL DATA', travel);

		return { data: travel, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};

// export const fetchTrip = async (id: string): Promise<{ data: Trip | null; error: any }> => {
// 	try {
// 		const data = await fetch(`https://trepir.herokuapp.com/trip/tripById/${id}`, {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 		const trip: Trip = await data.json();
// 		return { data: trip, error: null };
// 	} catch (error) {
// 		console.log('services/user/FetchUser', error);
// 		return { data: null, error };
// 	}
// };
