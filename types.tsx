/* eslint-disable max-classes-per-file */
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NewAccommodationState } from './features/newAccommodation/newAccommodationSlice';
import { NewTravelState } from './features/newTravel/newTravelSlice';

export type RootTabParamList = {
	Dashboard: undefined;
	Create: undefined;
	Discover: undefined;
};

export type CreateTripParamList = {
	CreateTrip: undefined;
	BeforeCreateTrip: undefined;
};
export type TripStackParamList = {
	Trip: undefined;
	ModifyTrip: undefined;
};

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	CreateStack: NavigatorScreenParams<CreateTripParamList> | undefined;
	TripStack: NavigatorScreenParams<TripStackParamList> | undefined;
	NewActivityModal: undefined;
	NewTravelModal: undefined;
	NewAccommodationModal: undefined;
	NotFound: undefined;
};
declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>;

export type TripStackScreenProps<Screen extends keyof TripStackParamList> = NativeStackScreenProps<
	TripStackParamList,
	Screen
>;

export type CreateStackScreenProps<Screen extends keyof CreateTripParamList> =
	NativeStackScreenProps<CreateTripParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<RootTabParamList, Screen>,
	NativeStackScreenProps<RootStackParamList>
>;

export type HomeStackParamList = {
	Login: undefined;
	HomeScreen: undefined;
	Register: undefined;
};

export type HomePageParamList = {
	HomeScreen: NavigatorScreenParams<HomeStackParamList> | undefined;
	Login: undefined;
	Register: undefined;
};

export type HomePageScreenProps<Screen extends keyof HomePageParamList> = CompositeScreenProps<
	BottomTabScreenProps<HomePageParamList, Screen>,
	NativeStackScreenProps<HomeStackParamList>
>;

// DATABASE TAGS
export type Tag =
	| 'Relax'
	| 'Landmark'
	| 'Entertainment'
	| 'Drinks'
	| 'Restaurant'
	| 'Adventure'
	| 'Museum'
	| 'Outdoors'
	| 'Tour'
	| 'Beach'
	| 'Culture'
	| 'Nightlife'
	| 'Nature'
	| 'Festivity'
	| 'Sport';

export class Location {
	constructor() {
		this.formattedAddress = '';
		this.photoUrl = [];
		this.latitude = 0;
		this.longitude = 0;
		this.country = '';
		this.state = '';
		this.locationName = '';
		this.city = '';
		this.googleId = null;
	}

	formattedAddress: string;

	latitude: number;

	longitude: number;

	photoUrl: string[];

	country: string;

	state: string;

	locationName: string;

	city: string;

	googleId: string | null;
}

export class ActivityEvent {
	constructor() {
		this.id = '';
		this.uid = '';
		this.name = '';
		this.duration = 0;
		this.description = '';
		this.rating = 0;
		this.tags = [] as Tag[];
		this.location = new Location();
		this.imageUrl = '';
		this.time = '';
	}

	id?: string;

	uid?: string;

	name: string;

	duration: number;

	description: string;

	rating?: number | null;

	tags: Tag[];

	location: Location;

	imageUrl: string;

	time?: string;
}

// USER TYPES -----------------------------------------------------------------------------------------------------------

export type User = {
	uid: string;
	createdAt: string;
	firstName: string;
	lastName: string;
	displayName: string;
	email: string;
	photoUrl: string;
	emailVerified: boolean;
	favoriteActivities: ActivityEvent[];
	trips: [];
};

export type UserFromBackend = {
	createdAt: string;
	firstName: string;
	lastName: string;
	displayName: string;
	email: string;
	photoUrl: string;
	emailVerified: boolean;
	favoriteActivities: ActivityEvent[];
	trips: [];
};

// EVENT TYPES -----------------------------------------------------------------------------------------------------------

export type DayActivityEvent = {
	id: string;
	createdAt: string;
	activityId: string;
	time: string;
	tripDayActivityId: string;
	activity: ActivityEvent;
};

export type TravelEvent = {
	id: string;
	createdAt: string;
	originLocationId: string;
	destinationLocationId: string;
	type: string;
	departure: string;
	eventType: string;
	tripDayActivityId: string;
	originLocation: Location;
	destinationLocation: Location;
};

export type AccommodationEvent = {
	id: string;
	createdAt: string;
	date: string;
	state: string;
	eventType: string;
	locationId: string;
	tripDayActivityId: string;
	location: Location;
};

// TRIP TYPES -----------------------------------------------------------------------------------------------------------

export type DayAct = {
	id: string;
	tripDayId: string;
	order: number;
	accommodation: NewAccommodationState | null;
	travelEvent: NewTravelState | null;
	dayActivity: DayActivityEvent | null;
};

export type TripDay = {
	id: string;
	dayIndex: number;
	tripId: string;
	tripDayActivities: DayAct[];
};

export type TripForPost = {
	name: string;
	startDate: string;
	endDate: string;
	googlePlaceId: string;
	latitude: number;
	longitude: number;
	photoUrl: string;
	formattedAddress: string;
	googleLocationName: string;
	travel: NewTravelState | null;
	accommodation: NewAccommodationState | null;
};

export type Trip = {
	uid: string;
	id: string;
	createdAt: string;
	userId: string;
	startDate: string;
	endDate: string;
	name: string;
	googlePlaceId: string;
	latitude: number;
	longitude: number;
	formattedAddress: string;
	googleLocationName: string;
	photoUrl: string;
	tripDay: TripDay[];
	favouriteActivities: ActivityEvent[];
};

export type Viewport = {
	latitudeHigh: number;
	latitudeLow: number;
	longitudeHigh: number;
	longitudeLow: number;
};

// STATES TYPES -----------------------------------------------------------------------------------------------------------

export type UserState = {
	uid: string;
	createdAt: string;
	firstName: string;
	lastName: string;
	displayName: string;
	email: string;
	photoUrl: string;
	emailVerified: boolean;
};

export type TripBasicState = {
	id: string;
	createdAt: string;
	userId: string;
	startDate: string;
	endDate: string;
	name: string;
	googlePlaceId: string;
	latitude: number;
	longitude: number;
	formattedAddress: string;
	googleLocationName: string;
	photoUrl: string;
};

export interface TravelState {
	type: string;
	departure: string;
	originLocation: Location;
	destinationLocation: Location;
	flightNum?: string | null;
	id?: string;
	uid: string;
}

export interface AccommodationState {
	startDate: string;
	endDate: string;
	location: Location;
	uid: string;
}

export interface NewActivityState {
	name: string;
	duration: number;
	description: string;
	time: number;
	uid: string;
	tags: string[];
	// rating: number: null
	location: Location;
}
