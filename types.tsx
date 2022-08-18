/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootTabParamList = {
	Dashboard: undefined;
	Create: undefined;
	Discover: undefined;
};

export type TripStackParamList = {
	Trip: undefined;
	ModifyTrip: undefined;
};

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
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
		this.latitude = 0;
		this.longitude = 0;
		this.country = '';
		this.state = '';
		this.locationName = '';
		this.city = '';
		this.googleId = null;
	}

	latitude: number;

	longitude: number;

	country: string;

	state: string;

	locationName: string;

	city: string;

	googleId: string | null;
}
export type Activity = {
	id: string;
	uid?: string;
	name: string;
	duration: number;
	description: string;
	timeStart: number;
	timeEnd: number;
	rating: number | null;
	tags: Tag[];
	location: Location;
	imageUrl: string;
};
