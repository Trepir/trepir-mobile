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
import { Activity, DayAct, TripStackScreenProps } from '../types';

function filterActivity(dayAct: DayAct) {
	if (dayAct.dayActivityId && dayAct.dayActivity?.activity)
		return <ActivityCard activity={dayAct.dayActivity.activity} />;
	if (dayAct.accommodationId && dayAct.accommodation)
		return <AccommodationCard accommodation={dayAct.accommodation} />;
	if (dayAct.travelEventId && dayAct.travel) return <TravelCard travel={dayAct.travel} />;
	return null;
}

// create a function that with a starting date and and index will return the actual date
function getDate(startDate: string, index: number) {
	const date = new Date(startDate);
	date.setDate(date.getDate() + index);
	return date.toLocaleDateString();
}

function Trip({ navigation }: TripStackScreenProps<'Trip'>) {
	const trip = useAppSelector((state) => state.currentTrip);
	console.log('What I get on Trip Screen', trip.tripDay);

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
								height={200}
								data={item.tripDayActivities}
								keyExtractor={(act) => act.id!}
								renderItem={({ item }) =>
									item.dayActivity && (
										<View width="100%" m={1} alignItems="center" bgColor="amber.100">
											{filterActivity(item)}
										</View>
									)
								}
							/>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

export default Trip;
