import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TabView, Route, TabBar } from 'react-native-tab-view';
import { Dimensions, useWindowDimensions } from 'react-native';
import Constants from 'expo-constants';
import Step1 from '../components/createTrip/Step1';
import Step2 from '../components/createTrip/Step2';
// import Step3 from '../components/createTrip/Step3';
import { NewAccommodationState } from '../features/newAccommodation/newAccommodationSlice';
import { NewTravelState } from '../features/newTravel/newTravelSlice';
import Step3 from '../components/createTrip/Step3';
import Colors from '../constants/Colors';
import { useAppDispatch } from '../app/hooks';
import { clearDates } from '../features/createTripValidation/CTValidationSlice';

export type newTripType = {
	uid: string;
	name: string;
	startDate: string;
	endDate: string;
	googlePlaceId: string;
	latitude: number;
	longitude: number;
	photoUrl: string;
	formattedAddress: string;
	googleLocationName: string;
	accommodation: NewAccommodationState[];
	travel: NewTravelState[];
};

function CreateScreen() {
	const [newTrip, setNewTrip] = useState<newTripType>({
		uid: '',
		name: '',
		startDate: '',
		endDate: '',
		googlePlaceId: '',
		latitude: 500,
		longitude: 500,
		photoUrl: '',
		formattedAddress: '',
		googleLocationName: '',
		travel: [],
		accommodation: [],
	});

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(clearDates());
	}, []);

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
		{ key: 'third', title: 'Activities' },
	]);

	const renderTabBar = (props: any) => (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: 'white' }}
			style={{ backgroundColor: Colors.primary.normal }}
			// onTabPress={({ _, preventDefault }) => {
			// 	preventDefault();
			// }}
		/>
	);
	return (
		<View
			// flex={1}
			bgColor={Colors.primary.normal}
			style={{
				paddingTop: Constants.statusBarHeight,
				height: Dimensions.get('window').height,
			}}
		>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
				swipeEnabled={false}
				renderTabBar={renderTabBar}
			/>
		</View>
	);
}

export default CreateScreen;
