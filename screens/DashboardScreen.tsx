import { ScrollView, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import Colors from '../constants/Colors';
import TopView from '../components/Dashboard/TopView';
import TripCarousel from '../components/TripCarousel';
import { useAppSelector } from '../app/hooks';
import { TripBasicState } from '../types';

function DashboardScreen() {
	const [upcomingTrips, setUpcomingTrips] = useState<TripBasicState[] | []>([]);
	const [pastTrips, setPastTrips] = useState<TripBasicState[] | []>([]);
	const [currentTrips, setCurrentTrips] = useState<TripBasicState[] | []>([]);

	const user = useAppSelector((state) => state.user);
	const trips = useAppSelector((state) => state.tripArray);

	useEffect(() => {
		if (trips) {
			const currentDate = new Date().toISOString();
			// const index = currentDate.indexOf('T');
			// const currentDateString = currentDate.substring(0, index);
			console.log(currentDate);
			const pastT = trips.filter((trip) => trip.endDate < currentDate);
			const upcomingT = trips.filter((trip) => trip.startDate > currentDate);
			const currentT = trips.filter(
				(trip) => trip.startDate <= currentDate && trip.endDate >= currentDate
			);
			setUpcomingTrips(upcomingT);
			setPastTrips(pastT);
			setCurrentTrips(currentT);
		}
	}, [trips]);

	if (user) {
		return (
			<View flex={1} justifyContent="flex-start" flexDirection="column">
				<TopView user={user} />
				<ScrollView flex={1} zIndex={1} backgroundColor={Colors.grey.offWhite}>
					{currentTrips.length > 0 && <TripCarousel type="current" trips={currentTrips} />}
					<TripCarousel type="upcoming" trips={upcomingTrips} />
					<TripCarousel type="past" trips={pastTrips} />
				</ScrollView>
			</View>
		);
	}
	return <View />;
}

export default DashboardScreen;
