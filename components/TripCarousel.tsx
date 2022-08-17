import React from 'react';
import { View, Text, ScrollView } from 'native-base';
import Colors from '../constants/Colors';
import TripItem from './ui/TripItem';
import { useAppDispatch } from '../app/hooks';

function TripCarousel({ tittle }: { tittle: string }) {
	const dispatch = useAppDispatch();
	// TRIPS STORED IN REDUX, THIS FUNCTION GETS THE TRIPS AND SETS THE STATE
	// useEffect(() => {
	//   const trip: Trip = dispatch(hereWeGetTheTrip);
	//   setPhoto(trip.photo);
	//   setUserName(trip.name);
	//   setStartDate(trip.startDate);
	//   setEndDate(trip.endDate);
	// }, []);

	return (
		<View>
			<Text paddingX={6} paddingY={2} fontSize="2xl">
				{tittle}
			</Text>
			<ScrollView horizontal>
				<TripItem />
				<TripItem />
				<TripItem />
				<TripItem />
				<TripItem />
				<TripItem />
				<TripItem />
				<TripItem />
			</ScrollView>
		</View>
	);
}

export default TripCarousel;
