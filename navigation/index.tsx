/* eslint-disable react/no-unstable-nested-components */
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import { Text } from 'native-base';
import Constants from 'expo-constants';
import { Platform } from 'expo-modules-core';
import CreateScreen from '../screens/CreateScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import AddActivityModal from '../modals/AddActivityScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {
	HomePageParamList,
	RootStackParamList,
	RootTabParamList,
	TripStackParamList,
} from '../types';
import { linkingRoot, linkingAuth } from './LinkingConfiguration';
import HomeScreen from '../screens/HomeScreen';
import AddTravelScreen from '../modals/AddTravelScreen';
import AddAccomScreen from '../modals/AddAccomScreen';
import { useAppSelector } from '../app/hooks';
import Trip from '../screens/Trip';
import ModifyTrip from '../screens/ModifyTrip';
import AddIcon from '../assets/icons/AddIcon';
import SuitcaseIcon from '../assets/icons/SuitcaseIcon';
import CompassIcon from '../assets/icons/CompassIcon';
import Colors from '../constants/Colors';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

// THE BOTTOM TAB NAVIGATION
// BASICALLY THE SURFACE NAVIGATION OF THE APP
function BottomTabNavigator() {
	// const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Dashboard"
			screenOptions={{
				tabBarActiveTintColor: 'black',
				tabBarStyle: {
					height: Platform.OS === 'ios' ? 85 : 65,
					paddingBottom: Platform.OS === 'ios' ? 28 : 10,
					paddingTop: 10,
				},
			}}
		>
			<BottomTab.Screen
				name="Dashboard"
				component={DashboardScreen}
				options={() => ({
					title: 'Dashboard',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<SuitcaseIcon color={focused ? Colors.primary.normal : Colors.grey.medium} size={32} />
					),
					tabBarLabel: ({ focused }) => (
						<Text color={focused ? Colors.primary.normal : Colors.grey.medium} fontSize="xs">
							Dashboard
						</Text>
					),
				})}
			/>
			<BottomTab.Screen
				name="Create"
				component={CreateScreen}
				options={{
					title: 'Create',
					tabBarIcon: ({ focused }) => (
						<AddIcon color={focused ? Colors.primary.normal : Colors.grey.medium} size={34} />
					),
					tabBarLabel: ({ focused }) => (
						<Text color={focused ? Colors.primary.normal : Colors.grey.medium} fontSize="xs">
							Create
						</Text>
					),
					headerShown: false,
				}}
			/>

			<BottomTab.Screen
				name="Discover"
				component={DiscoverScreen}
				options={{
					title: 'Discover',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<CompassIcon color={focused ? Colors.primary.normal : Colors.grey.medium} size={28} />
					),
					tabBarLabel: ({ focused }) => (
						<Text color={focused ? Colors.primary.normal : Colors.grey.medium} fontSize="xs">
							Discover
						</Text>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

const tripStack = createNativeStackNavigator<TripStackParamList>();

function TripStackNavigator() {
	return (
		<tripStack.Navigator>
			<tripStack.Screen name="Trip" component={Trip} options={{ headerShown: false }} />
			<tripStack.Screen name="ModifyTrip" component={ModifyTrip} />
		</tripStack.Navigator>
	);
}
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	// THIS IS WHERE ALL ELEMENTS OF THE ROOT NAVIGATION STACK ARE
	// HANDLES ALL THE ROUTES AT TOP LEVEL
	return (
		<Stack.Navigator>
			<Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
			<Stack.Screen
				name="TripStack"
				component={TripStackNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen
					name="NewActivityModal"
					component={AddActivityModal}
					options={{ title: 'Create a New Activity' }}
				/>
				<Stack.Screen
					name="NewTravelModal"
					component={AddTravelScreen}
					options={{ title: 'Add a Travel Event' }}
				/>
				<Stack.Screen
					name="NewAccommodationModal"
					component={AddAccomScreen}
					options={{ title: 'Add an Accommodation' }}
				/>
			</Stack.Group>
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
		</Stack.Navigator>
	);
}

const AuthStack = createNativeStackNavigator<HomePageParamList>();

function AuthNavigator() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
			{/* <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
			<AuthStack.Screen name="Register" component={Login} options={{ headerShown: false }} /> */}
		</AuthStack.Navigator>
	);
}

export default function Navigation(/* { colorScheme }: { colorScheme: ColorSchemeName } */) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const user = useAppSelector((state) => state.user);

	useEffect(() => {
		if (user.uid.length > 0) setIsAuthenticated(true);
		else setIsAuthenticated(false);
	}, [user]);

	if (isAuthenticated) {
		return (
			<NavigationContainer
				linking={linkingRoot}
				// theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
			>
				<RootNavigator />
			</NavigationContainer>
		);
	}
	return (
		<NavigationContainer linking={linkingAuth}>
			<AuthNavigator />
		</NavigationContainer>
	);
}
