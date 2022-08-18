import { View } from 'native-base';
import React, { useState } from 'react';
import { TabView, Route } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import Step1 from '../components/createTrip/Step1';
import Step2 from '../components/createTrip/Step2';
// import Step3 from '../components/createTrip/Step3';
import { Location } from '../types';
import { NewAccommodationState } from '../features/newAccommodation/newAccommodationSlice';
import { NewTravelState } from '../features/newTravel/newTravelSlice';
import Step3 from '../components/createTrip/Step3';

export type newTripType = {
	name: string;
	location: Location;
	startDate: string;
	endDate: string;
	tripTravels: NewTravelState[];
	tripAccommodations: NewAccommodationState[];
};

function CreateScreen() {
	const [newTrip, setNewTrip] = useState<newTripType>({
		name: '',
		location: new Location(),
		startDate: '',
		endDate: '',
		tripTravels: [],
		tripAccommodations: [],
	});

	// eslint-disable-next-line no-unused-vars
	const renderScene = ({ route, jumpTo }: { route: Route; jumpTo: (key: string) => void }) => {
		switch (route.key) {
			case 'first':
				return <Step1 jumpTo={jumpTo} newTrip={newTrip} setNewTrip={setNewTrip} />;
			case 'second':
				return <Step2 jumpTo={jumpTo} newTrip={newTrip} setNewTrip={setNewTrip} />;
			case 'third':
				return <Step3 jumpTo={jumpTo} />;

			default:
				return <Step1 jumpTo={jumpTo} newTrip={newTrip} setNewTrip={setNewTrip} />;
		}
	};

	const layout = useWindowDimensions();
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Trip Details' },
		{ key: 'second', title: 'Travel & Stay' },
		{ key: 'third', title: 'Activity' },
	]);

	return (
		<View flex={1}>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
				// swipeEnabled={false}
			/>
		</View>
	);
}

export default CreateScreen;

/**
 * 			<Text>CreateScreen</Text>
			<Pressable
				py={5}
				my={5}
				bgColor="amber.300"
				onPress={() => {
					navigation.navigate('NewTravelModal');
				}}
			>
				<Text>Add Travel Modal</Text>
			</Pressable>
			<Pressable
				py={5}
				my={5}
				bgColor="amber.300"
				onPress={() => {
					navigation.navigate('NewAccommodationModal');
				}}
			>
				<Text>Add Accommodation Modal</Text>
			</Pressable>
			<Pressable
				py={5}
				my={5}
				bgColor="amber.300"
				onPress={() => {
					navigation.navigate('NewActivityModal');
				}}
			>
				<Text>Add Activity Modal</Text>
			</Pressable>

 */
