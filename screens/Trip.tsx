/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'expo-modules-core';
import { View, FlatList, HStack, Heading, Divider, Pressable } from 'native-base';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import AccommodationCard from '../components/createTrip/AccommodationCard';
import EmptyList from '../components/createTrip/EmptyList';
import TravelCard from '../components/createTrip/TravelCard';
import TopViewTrip from '../components/Trip/TopViewTrip';
import ActivityCard from '../components/ui/ActivityCard';
import Colors from '../constants/Colors';
import { storeCurrentActivity } from '../features/currentActivity/currentActivitySlice';
import { storeLikedActivities } from '../features/user/likedActivitiesSlice';
import { storeArrayTrip } from '../features/user/tripArraySlice';
import { storeUser } from '../features/user/userSlice';
import { getDate } from '../helpers/getDateOfTripDay';
import { fetchUser } from '../services/user';
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
	const userId = useAppSelector((state) => state.user.uid);
	const dispatch = useAppDispatch();

	const ModifyTrip = () => {
		navigation.navigate('TripStack', { screen: 'ModifyTrip' });
	};

	const goToActivity = (item: DayAct) => {
		dispatch(storeCurrentActivity(item));
		navigation.navigate('ActivityScreen');
	};
	const updateGeneralState = async () => {
		const payload = await fetchUser(userId);
		if (payload.data) {
			dispatch(storeUser(payload.data));
			dispatch(storeArrayTrip(payload.data.trips));
			dispatch(storeLikedActivities(payload.data.favoriteActivities));
		} else {
			// SHOW ERROR ON THE SCREEN FIXME
			console.log('Login.tsx error:', payload.error);
		}
	};
	useEffect(() => {
		updateGeneralState();
	}, []);

	const checkIfPast = (date: string) => {
		const today = new Date();
		const tripDate = new Date(date);
		console.log('TIMES!', today, tripDate);
		return tripDate < today;
	};

	return (
		<View flex={1} width="100%" alignItems="center" justifyContent="flex-start">
			<TopViewTrip title={trip.name} callback={ModifyTrip} isInPast={checkIfPast(trip.endDate)} />
			<View flex={1} width="100%" bgColor={Colors.grey.extraLight}>
				<FlatList
					width="100%"
					data={trip.tripDay}
					keyExtractor={(item) => item.id!}
					renderItem={({ item }) => (
						<View width="100%" my={2}>
							<Heading ml={5} pb={0.5} fontWeight="medium">
								{getDate(trip.startDate, item.dayIndex)}
							</Heading>
							<Divider width="90%" mb={2} alignSelf="center" color={Colors.grey.dark} />
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
