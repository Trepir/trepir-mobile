import { useNavigation } from '@react-navigation/native';
import { View, Heading, HStack, Pressable, Divider, FlatList, Box } from 'native-base';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AddIcon from '../../assets/icons/AddIcon';
import Colors from '../../constants/Colors';
import { clearDates } from '../../features/createTripValidation/CTValidationSlice';
import { clearAccommodationState } from '../../features/newAccommodation/newAccommodationSlice';
import { clearTravelState } from '../../features/newTravel/newTravelSlice';
import { newTripType } from '../../screens/CreateScreen';
import { createTripApi } from '../../services/CreateTripService';
import { AccommodationState, TravelState } from '../../types';
import ButtonCustom from '../ui/ButtonCustom';
import CreateAccomCard from './CreateAccomCard';
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
	const [travels, setTravels] = useState<TravelState[]>([]);
	const [accommodations, setAccommodations] = useState<AccommodationState[]>([]);
	const newTravel = useAppSelector((state) => state.newTravel);
	const newAccommodation = useAppSelector((state) => state.newAccommodation);

	useEffect(() => {
		if (newTravel.uid !== '') {
			setTravels([
				...travels,
				{ ...newTravel, departure: new Date(newTravel.departure).toISOString() },
			]);
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
		try {
			const formattedTrip: any = {
				...newTrip,
				uid: '2',
				startDate: newTrip.startDate,
				endDate: newTrip.endDate,
				travelEvents: travels.map((formattedTravels) => ({
					...formattedTravels,
					origin: formattedTravels.originLocation,
					destination: formattedTravels.destinationLocation,
					travelType: formattedTravels.type,
					// departure: new Date(formattedTravels.departure),
				})),
				accommodation: accommodations,
			};
			setNewTrip(formattedTrip);
			dispatch(clearDates());
			const createdTrip = await createTripApi(formattedTrip);
			console.log(createdTrip.data);
			//HERE DO THE CALL
			jumpTo('third');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View flex={1} alignItems="center" bgColor={Colors.grey.offWhite}>
			<Heading alignSelf="center" my={5} fontWeight="semibold">
				Add yor Travels and Stays
			</Heading>
			<HStack alignItems="center" width="full" justifyContent="space-between" px={10}>
				<Heading fontSize="xl" fontWeight="medium">
					Your Travels
				</Heading>
				<Pressable onPress={() => navigation.navigate('NewTravelModal')} p={1} rounded="xl">
					<AddIcon size={30} color={Colors.primary.dark} />
				</Pressable>
			</HStack>
			<Divider my={2} w="80%" />

			{travels.length > 0 ? (
				<FlatList
					maxHeight={160}
					width="full"
					data={travels}
					keyExtractor={(item) => item.originLocation.googleId!}
					renderItem={({ item, index }) => (
						<Box
							ml={index === 0 ? '8' : '0'}
							mr="3"
							alignSelf="center"
							style={{ width: 335 }}
							alignItems="center"
						>
							<TravelCard key={item.originLocation.googleId} travel={item} />
						</Box>
					)}
					horizontal
				/>
			) : (
				<EmptyList text="You dont have any travel yet." />
			)}
			<Divider my={2} w="80%" />

			<HStack alignItems="center" width="full" justifyContent="space-between" mt={4} px={10}>
				<Heading fontSize="xl" fontWeight="medium">
					Your Stay
				</Heading>
				<Pressable onPress={() => navigation.navigate('NewAccommodationModal')} p={1} rounded="xl">
					<AddIcon size={30} color={Colors.primary.dark} />
				</Pressable>
			</HStack>
			<Divider my={2} w="80%" />

			{accommodations.length > 0 ? (
				<FlatList
					maxHeight={180}
					width="full"
					data={accommodations}
					keyExtractor={(item) => item.location.googleId!}
					renderItem={({ item, index }) => (
						<Box
							ml={index === 0 ? '8' : '0'}
							mr="3"
							alignSelf="center"
							style={{ width: 335 }}
							alignItems="center"
						>
							<CreateAccomCard key={item.location.googleId} accommodation={item} />
						</Box>
					)}
					horizontal
				/>
			) : (
				<EmptyList text="You dont have any stays yet." />
			)}
			<Divider my={2} w="80%" />
			<HStack mt="8" justifyContent="space-between" w="80%">
				<Box>
					<ButtonCustom text="Back" pressFunction={() => jumpTo('first')} alignment="flex-start" />
				</Box>
				<Box>
					<ButtonCustom text="Create Trip" pressFunction={createTrip} alignment="flex-end" />
				</Box>
			</HStack>
		</View>
	);
}

export default Step2;
