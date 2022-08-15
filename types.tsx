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

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	NewActivityModal: undefined;
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

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<RootTabParamList, Screen>,
	NativeStackScreenProps<RootStackParamList>
>;

export type HomeStackParamList = {
	Login: undefined;
	Home: undefined;
	Register: undefined;
};

export type HomePageParamList = {
	HomeScreen: NavigatorScreenParams<HomeStackParamList> | undefined;
};

export type HomePageScreenProps<Screen extends keyof HomePageParamList> = CompositeScreenProps<
	BottomTabScreenProps<HomePageParamList, Screen>,
	NativeStackScreenProps<HomeStackParamList>
>;
