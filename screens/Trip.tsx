/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'expo-modules-core';
import { View, FlatList, HStack, Heading, Divider, Pressable } from 'native-base';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import AccommodationCard from '../components/createTrip/AccommodationCard';
import EmptyList from '../components/createTrip/EmptyList';
import TravelCard from '../components/createTrip/TravelCard';
import TopViewTrip from '../components/Trip/TopViewTrip';
import ActivityCard from '../components/ui/ActivityCard';
import Colors from '../constants/Colors';
import { storeCurrentActivity } from '../features/currentActivity/currentActivitySlice';
import { getDate } from '../helpers/getDateOfTripDay';
import { DayAct, TripStackScreenProps } from '../types';

function filterActivity(dayAct: DayAct) {
	if (dayAct.dayActivity?.activity) return <ActivityCard activity={dayAct.dayActivity.activity} />;
	if (dayAct.accommodation)
		return <AccommodationCard isInTripView accommodation={dayAct.accommodation} />;
	if (dayAct.travelEvent) return <TravelCard isInTripView travel={dayAct.travelEvent} />;

	return null;
}

function Trip() {
	const navigation = useNavigation();
	const trip = useAppSelector((state) => state.currentTrip);
	const dispatch = useAppDispatch();

	const ModifyTrip = () => {
		navigation.navigate('TripStack', { screen: 'ModifyTrip' });
	};

	const goToActivity = (item: DayAct) => {
		dispatch(storeCurrentActivity(item));
		navigation.navigate('ActivityScreen');
	};

	return (
		<View flex={1} width="100%" alignItems="center" justifyContent="flex-start">
			<TopViewTrip title={trip.name} callback={ModifyTrip} />
			<View flex={1} width="100%" bgColor={Colors.grey.extraLight}>
				<FlatList
					width="100%"
					data={trip.tripDay}
					keyExtractor={(item) => item.id!}
					renderItem={({ item }) => (
						<View width="100%" my={2}>
							<HStack alignItems="center" width="80%" pl="7%" py={1}>
								<Heading alignSelf="center" fontWeight="medium">
									{getDate(trip.startDate, item.dayIndex)}
								</Heading>
								{Platform.OS === 'ios' ? (
									<Divider width="120%" mx="5" />
								) : (
									<Divider width="120%" mx="5" />
								)}
							</HStack>
							{item.tripDayActivities.length > 0 ? (
								<FlatList
									width="100%"
									data={item.tripDayActivities}
									keyExtractor={(act) => act.id!}
									renderItem={({ item }) => (
										<Pressable
											width="100%"
											m={1}
											alignItems="center"
											onPress={() => goToActivity(item)}
										>
											{filterActivity(item)}
										</Pressable>
									)}
								/>
							) : (
								<EmptyList text="There are no activities for this day" />
							)}
						</View>
					)}
				/>
			</View>
		</View>
	);
}

export default Trip;
