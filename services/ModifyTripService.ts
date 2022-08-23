// import { Trip } from '../types';

import { Location, TripDay } from '../types';

const url = 'https://trepir.herokuapp.com';
// const url = 'http://192.168.1.215:4000';

type AddActivityType = {
	tripDayId: string;
	activityId: string;
	time?: number;
};

export const addActivityToTrip = async (
	activityInfo: AddActivityType
): Promise<{ data: TripDay | null; error: any }> => {
	try {
		const result = await fetch(`${url}/trip/addActivity`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(activityInfo),
		});
		const newTripDay: TripDay = await result.json();
		return { data: newTripDay, error: null };
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
): Promise<{ data: TripDay[] | null; error: any }> => {
	try {
		const result = await fetch(`${url}/trip/addAccommodation`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newAccommodation),
		});
		const newDays: TripDay[] = await result.json();
		return { data: newDays, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
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
export const addTravelToTrip = async (
	newTravel: AddTravelType
): Promise<{ data: TripDay | null; error: any }> => {
	try {
		const result = await fetch(`${url}/trip/addTravelEvent`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTravel),
		});
		const newTripDay: TripDay = await result.json();

		return { data: newTripDay, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};

// type DeleteInfo = {
// 	id: string;
// 	order: number;
// 	tripDayId: string;
// };

export const deleteEventFromTrip = async (
	id: string
): Promise<{ data: TripDay[] | null; error: any }> => {
	try {
		const result = await fetch(`${url}/trip/deleteEvent`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id }),
		});
		const deleteResult: TripDay[] = await result.json();
		return { data: deleteResult, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};

type ReorderDay = {
	newOrder: number;
	tripDayId: string;
	tripDayActivityId: string;
};

export const reorderTripDay = async (
	reorderData: ReorderDay
): Promise<{ data: TripDay | null; error: any }> => {
	try {
		const result = await fetch(`${url}/trip/reorderDay`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(reorderData),
		});
		const newDay: TripDay = await result.json();
		newDay.tripDayActivities.sort((a, b) => a.order - b.order);
		return { data: newDay, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};
type ChangeDay = {
	activityId: string;
	newOrder: number;
	newTripDayId: string;
	previousTripDayId: string;
	tripDayActivityId: string;
};

export const changeTripDay = async (
	changeData: ChangeDay
): Promise<{ data: TripDay[] | null; error: any }> => {
	try {
		const result = await fetch(`${url}/trip/activityChangeDay`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(changeData),
		});
		const newDays: TripDay[] = await result.json();

		return { data: newDays, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error };
	}
};
