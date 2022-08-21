import { View, FlatList, HStack, Heading, Divider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useAppSelector } from '../app/hooks';
import TopViewTrip from '../components/Trip/TopViewTrip';
import ActivityCard from '../components/ui/ActivityCard';
import { TripStackScreenProps } from '../types';

function Trip({ navigation }: TripStackScreenProps<'Trip'>) {
	const trip = useAppSelector((state) => state.currentTrip);
	console.log('What I get on Trip Screen', trip.tripDay);
	console.log('TRIP INFO', trip);

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
					renderItem={({ item, index }) => (
						<View width="100%" my={1}>
							<HStack alignItems="center" justifyContent="center" py={1}>
								<Heading alignSelf="center" fontWeight="semibold">
									{item.id}
								</Heading>
								<Divider width="50%" mx="5" />
							</HStack>
							{/* <FlatList
								width="100%"
								data={item.tripDayActivities}
								keyExtractor={(act) => act.id!}
								renderItem={({ item }) =>
									item.dayActivity && (
										<View width="100%" m={1} alignItems="center">
											<ActivityCard activity={item.dayActivity.activity} />
										</View>
									)
								}
							/> */}
							{/* {item.activities.length > 0 ? (
								
							) : (
								<EmptyList text="The trip is empty, add some activities!" />
							)} */}
						</View>
					)}
				/>
			</View>
		</View>
	);
}

export default Trip;
