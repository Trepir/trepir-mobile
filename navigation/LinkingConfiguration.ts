/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

// WHEN WE CHANGE SOMETHING ON THE ROUTES WE HAVE TO CHANGE IT HERE
const linking: LinkingOptions<RootStackParamList> = {
	prefixes: [Linking.createURL('/')],
	config: {
		screens: {
			Auth: {
				screens: {
					Login: {
						screens: {
							Login: 'Login',
						},
					},
					Home: {
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
			NotFound: '*',
		},
	},
};

export default linking;
