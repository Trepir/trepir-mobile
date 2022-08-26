/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList, HomePageParamList } from '../types';

// WHEN WE CHANGE SOMETHING ON THE ROUTES WE HAVE TO CHANGE IT HERE
export const linkingRoot: LinkingOptions<RootStackParamList> = {
	prefixes: [Linking.createURL('/')],
	config: {
		screens: {
			Root: {
				screens: {
					Dashboard: {
						screens: {
							Dashboard: 'Dashboard',
						},
					},
					Create: {
						screens: {
							Create: 'Create Trip',
						},
					},
					Discover: {
						screens: {
							Discover: 'Discover',
						},
					},
				},
			},
			NewActivityModal: 'NewActivityModal',
			NewTravelModal: 'NewTravelModal',
			NewAccommodationModal: 'NewAccommodationModal',
			NotFound: '*',
		},
	},
};

export const linkingAuth: LinkingOptions<HomePageParamList> = {
	prefixes: [Linking.createURL('/')],
	config: {
		screens: {
			HomeScreen: {
				screens: {
					Login: {
						screens: {
							Login: 'Login',
						},
					},
					HomeScreen: {
						screens: {
							Home: 'Home',
						},
					},
					Register: {
						screens: {
							Register: 'Register',
						},
					},
				},
			},
		},
	},
};

// export default linkingRoot, linkingAuth;
