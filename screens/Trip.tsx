import { View, FlatList, HStack, Heading, Divider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useAppSelector } from '../app/hooks';
import AccommodationCard from '../components/createTrip/AccommodationCard';
import EmptyList from '../components/createTrip/EmptyList';
import TravelCard from '../components/createTrip/TravelCard';
import TopViewTrip from '../components/Trip/TopViewTrip';
import ActivityCard from '../components/ui/ActivityCard';
import { NewTravelState } from '../features/newTravel/newTravelSlice';
import { ActivityEvent, DayAct, TripStackScreenProps } from '../types';

function filterActivity(dayAct: DayAct) {
	console.log('ONE DAY', dayAct);
	if (dayAct.dayActivity?.activity) {
		return <ActivityCard activity={dayAct.dayActivity.activity} />;
	}
	if (dayAct.accommodation) {
		console.log('Accommodation', dayAct.accommodation);
		return <AccommodationCard accommodation={dayAct.accommodation} />;
	}
	if (dayAct.travelEvent) return <TravelCard travel={dayAct.travelEvent} />;
	return null;
}

function getDate(startDate: string, index: number) {
	const date = new Date(startDate);
	date.setDate(date.getDate() + index);
	return date.toLocaleDateString();
}

function Trip({ navigation }: TripStackScreenProps<'Trip'>) {
	const trip = useAppSelector((state) => state.currentTrip);

	const ModifyTrip = () => {
		navigation.navigate('ModifyTrip');
	};

	return (
		<View flex={1} width="100%" alignItems="center" justifyContent="flex-start">
			<TopViewTrip title={trip.name} callback={ModifyTrip} />
			<View flex={1} width="100%" bgColor="transparent">
				<FlatList
					width="100%"
					data={trip.tripDay}
					keyExtractor={(item) => item.id!}
					renderItem={({ item }) => (
						<View width="100%" my={1}>
							<HStack alignItems="center" justifyContent="center" py={1}>
								<Heading alignSelf="center" fontWeight="semibold">
									{getDate(trip.startDate, item.dayIndex)}
								</Heading>
								<Divider width="50%" mx="5" />
							</HStack>
							<FlatList
								width="100%"
								data={item.tripDayActivities}
								keyExtractor={(act) => act.id!}
								renderItem={({ item }) => (
									<View width="100%" m={1} alignItems="center">
										{filterActivity(item)}
									</View>
								)}
							/>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

export default Trip;
