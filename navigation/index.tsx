/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import CreateScreen from '../screens/CreateScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import AddActivityModal from '../modals/AddActivityScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { HomeStackParamList, RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../screens/HomeScreen';
import Login from '../modals/Login';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// JUST AN ICON THAT WE ARE GONNA OVERRIDE
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

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
			}}
		>
			<BottomTab.Screen
				name="Dashboard"
				component={DashboardScreen}
				options={() => ({
					title: 'Dashboard',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				})}
			/>
			<BottomTab.Screen
				name="Create"
				component={CreateScreen}
				options={{
					title: 'Create',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>

			<BottomTab.Screen
				name="Discover"
				component={DiscoverScreen}
				options={{
					title: 'Discover',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
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

			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen
					name="NewActivityModal"
					component={AddActivityModal}
					options={{ title: 'Create a New Activity' }}
				/>
			</Stack.Group>
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
		</Stack.Navigator>
	);
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
			<HomeStack.Group screenOptions={{ presentation: 'modal' }}>
				<HomeStack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
			</HomeStack.Group>
		</HomeStack.Navigator>
	);
}

export default function Navigation(/* { colorScheme }: { colorScheme: ColorSchemeName } */) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			// theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/* <BottomTab.Screen
  name="TabOne"
  component={TabOneScreen}
  options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
    title: 'Tab One',
    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    headerRight: () => (
      <Pressable
        onPress={() => navigation.navigate('Modal')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name="info-circle"
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    ),
  })}
/> */
