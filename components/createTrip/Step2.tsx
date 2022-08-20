import { useNavigation } from '@react-navigation/native';
import { View, Text, Heading, HStack, Pressable, Divider, FlatList, Box } from 'native-base';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Colors from '../../constants/Colors';
import {
	clearAccommodationState,
	NewAccommodationState,
} from '../../features/newAccommodation/newAccommodationSlice';
import { clearTravelState, NewTravelState } from '../../features/newTravel/newTravelSlice';
import { newTripType } from '../../screens/CreateScreen';
import { createTripApi } from '../../services/CreateTripService';
import ButtonCustom from '../ui/ButtonCustom';
import AccommodationCard from './AccommodationCard';
import EmptyList from './EmptyList';
import TravelCard from './TravelCard';

type Props = {
	// eslint-disable-next-line no-unused-vars
	jumpTo: (key: string) => void;
	newTrip: newTripType;
	setNewTrip: Dispatch<SetStateAction<newTripType>>;
};

function Step2({ jumpTo, newTrip, setNewTrip }: Props) {
	const dispatch = useAppDispatch();
	const navigation = useNavigation();
	const [travels, setTravels] = useState<NewTravelState[]>([]);
	const [accommodations, setAccommodations] = useState<NewAccommodationState[]>([]);
	const newTravel = useAppSelector((state) => state.newTravel);
	const newAccommodation = useAppSelector((state) => state.newAccommodation);

	useEffect(() => {
		if (newTravel.uid !== '') {
			setTravels([...travels, newTravel]);
			dispatch(clearTravelState());
		}
	}, [newTravel]);
	useEffect(() => {
		if (newAccommodation.uid !== '') {
			console.log('ACCOMMODATION IS CREATED');
			setAccommodations([...accommodations, newAccommodation]);
			dispatch(clearAccommodationState());
		}
	}, [newAccommodation]);

	const createTrip = async () => {
		console.log(newTrip);

		const formattedTrip: any = {
			...newTrip,
			uid: '123456789',
			startDate: new Date(Date.parse(newTrip.startDate)),
			endDate: new Date(Date.parse(newTrip.endDate)),
			travelEvents: travels.map((formattedTravels) => ({
				...formattedTravels,
				departure: new Date(formattedTravels.departure),
			})),
			// eslint-disable-next-line object-shorthand
			accommodation: accommodations,
		};
		console.log('TRAVEL =>', formattedTrip.travelEvents[0]);
		await createTripApi(formattedTrip);
	};

	/*
	"startDate must be a valid ISO 8601 date string",
    "startDate should not be empty",
    "endDate must be a valid ISO 8601 date string",
    "endDate should not be empty",
    "name should not be empty",
    "googlePlaceId should not be empty",
    "formattedAddress should not be empty",
    "googleLocationName should not be empty",
	*/

	return (
		<View flex={1} px={10} bgColor={Colors.grey.offWhite}>
			<Heading alignSelf="center" my={4} fontWeight="semibold">
				Add yor Travels and Stays
			</Heading>
			<HStack alignItems="center" width="full" justifyContent="space-between">
				<Heading fontSize="xl" fontWeight="medium">
					Your Travels
				</Heading>
				<Pressable
					onPress={() => navigation.navigate('NewTravelModal')}
					bgColor={Colors.primary.dark}
					rounded="xl"
				>
					<Text py={2} px={4} color="white">
						Add Travel
					</Text>
				</Pressable>
			</HStack>
			<Divider my={2} />

			{travels.length > 0 ? (
				<FlatList
					maxHeight={160}
					width="full"
					data={travels}
					keyExtractor={(item) => item.origin.googleId!}
					renderItem={({ item }) => <TravelCard key={item.origin.googleId} travel={item} />}
					horizontal
				/>
			) : (
				<EmptyList text="You dont have any travel yet." />
			)}
			<Divider my={2} />

			<HStack alignItems="center" width="full" justifyContent="space-between" mt={4}>
				<Heading fontSize="xl" fontWeight="medium">
					Your Stay
				</Heading>
				<Pressable
					onPress={() => navigation.navigate('NewAccommodationModal')}
					bgColor={Colors.primary.dark}
					rounded="xl"
				>
					<Text py={2} px={4} color="white">
						Add Stays
					</Text>
				</Pressable>
			</HStack>
			<Divider my={2} />

			{accommodations.length > 0 ? (
				<FlatList
					maxHeight={180}
					data={accommodations}
					keyExtractor={(item) => item.location.googleId!}
					renderItem={({ item }) => (
						<AccommodationCard key={item.location.googleId} accommodation={item} />
					)}
					horizontal
				/>
			) : (
				<EmptyList text="You dont have any stays yet." />
			)}
			<Divider />
			<Box mt="8">
				<ButtonCustom text="Create Trip" pressFunction={createTrip} alignment="center" />
			</Box>
		</View>
	);
}

export default Step2;
