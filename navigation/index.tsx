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
import ModalScreen from '../modals/AddActivityScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation(/*{ colorScheme }: { colorScheme: ColorSchemeName } */) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			// theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	// THIS IS WHERE ALL ELEMENTS OF THE ROOT NAVIGATION STACK ARE
	//HANDLES ALL THE ROUTES AT TOP LEVEL
	return (
		<Stack.Navigator>
			<Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
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
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// JUST AN ICON THAT WE ARE GONNA OVERRIDE
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

{
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
}
