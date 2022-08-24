import { Text, Pressable, Image, VStack, HStack } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import Arrow from '../../assets/icons/Arrow';
import { TripBasicState } from '../../types';
import { fetchTrip } from '../../services/trip';
import { useAppDispatch } from '../../app/hooks';
import { storeCurrentTrip } from '../../features/trip/currentTripSlice';

function TripItem({ trip, useNav }: { trip: TripBasicState; useNav?: () => {} }) {
	const dispatch = useAppDispatch();
	const navigation = useNavigation();

	const { id } = trip;
	const { name } = trip;
	const startDate = new Date(trip.startDate).toDateString().slice(4);
	const endDate = new Date(trip.endDate).toDateString().slice(4);
	const { photoUrl } = trip;

	return (
		<Pressable
			borderRadius={18}
			backgroundColor={Colors.white}
			width={350}
			p={2}
			m={2}
			shadow={2}
			onPress={
				useNav !== undefined
					? useNav
					: async () => {
							try {
								const fetchedTrip = await fetchTrip(id);
								if (fetchedTrip.data) {
									dispatch(storeCurrentTrip(fetchedTrip.data));
									navigation.navigate('TripStack', { screen: 'Trip' });
								}
							} catch (error) {
								console.error(error);
							}
					  }
			}
		>
			<VStack>
				<Image
					source={{
						uri: photoUrl,
					}}
					alt="trip"
					width="100%"
					height={150}
					borderRadius={12}
				/>
				<HStack justifyContent="space-between" alignItems="center" px={2} mt={1}>
					<VStack>
						<Text fontSize="xl" fontWeight="semibold" isTruncated>
							{name}
						</Text>
						<HStack alignSelf="center" alignItems="center">
							<Text>{startDate} </Text>
							<Text> </Text>
							<Arrow size={4} color={Colors.black} />
							<Text> </Text>
							<Text> {endDate}</Text>
						</HStack>
					</VStack>
					<Arrow size={11} />
				</HStack>
			</VStack>
		</Pressable>
	);
}

export default TripItem;
