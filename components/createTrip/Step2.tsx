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
	const [travelEvents, setTravelEvents] = useState<NewTravelState[]>([]);
	const [accommodations, setAccommodations] = useState<NewAccommodationState[]>([]);
	const newTravel = useAppSelector((state) => state.newTravel);
	const newAccommodation = useAppSelector((state) => state.newAccommodation);

	useEffect(() => {
		if (newTravel.uid !== '') {
			setTravelEvents([...travelEvents, newTravel]);
			dispatch(clearTravelState());
		}
	}, [newTravel]);
	useEffect(() => {
		if (newAccommodation.uid !== '') {
			setAccommodations([...accommodations, newAccommodation]);
			dispatch(clearAccommodationState());
		}
	}, [newAccommodation]);

	const createTrip = async () => {
		setNewTrip((prev) => ({
			...prev,
			travel: travelEvents,
			accommodation: accommodations,
		}));

		setTimeout(() => {
			console.log('FORM DATA=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', newTrip);
		}, 1000);
	};

	return (
		<View flex={1} px={10}>
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

			{travelEvents.length > 0 ? (
				<FlatList
					maxHeight={180}
					width="full"
					data={travelEvents}
					keyExtractor={(item) => item.origin.googleId!}
					renderItem={({ item }) => <TravelCard key={item.origin.googleId} travel={item} />}
					horizontal
				/>
			) : (
				<EmptyList text="You dont have any travel yet." />
			)}
			<Divider />

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
