import { Box, Divider, Pressable, Text, View } from 'native-base';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import InputLabel from '../components/ui/InputLabel';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import ButtonCustom from '../components/ui/ButtonCustom';
import { Location, RootTabScreenProps } from '../types';
import { parseLocationDetails } from '../helpers/parseLocationDetails';
import { useAppDispatch } from '../app/hooks';
import { storeNewAccommodation } from '../features/newAccommodation/newAccommodationSlice';
import DateRangePicker from '../components/form/DateRangePicker';

function AddAccomScreen({ navigation }: RootTabScreenProps<'Create'>) {
	const dispatch = useAppDispatch();

	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [formValidation, setFormValidation] = useState({
		date: true,
		location: true,
	});
	const [location, setLocation] = useState(new Location());

	const assignLocation = (_: any, details: GooglePlaceDetail) => {
		const locationData = parseLocationDetails(details);
		setLocation(locationData);
	};

	const submitAccommodation = () => {
		if (location.locationName === '' || startDate === '' || endDate === '') {
			const newFormValidationState = {
				date: true,
				location: true,
			};
			if (location.locationName === '') newFormValidationState.location = false;
			else newFormValidationState.location = true;

			if (startDate === '' || endDate === '') newFormValidationState.date = false;
			else newFormValidationState.date = true;

			setFormValidation(newFormValidationState);
		} else {
			dispatch(
				storeNewAccommodation({
					creatorId: '1',
					startDate: new Date(startDate).getTime(),
					endDate: new Date(endDate).getTime(),
					location,
				})
			);
			navigation.goBack();
		}
	};

	return (
		<DismissKeyboard>
			<View flex={1} px="10">
				<InputLabel labelText="Add your trip by Email" />
				<Pressable bgColor="red.400" alignSelf="center" rounded="xl" mt="2">
					<Text color="white" px={10} py={5} fontSize="lg" fontWeight="bold">
						Input an Email Reservation{' '}
					</Text>
				</Pressable>
				<Divider mt="8" />

				<View position="absolute" width="100%" alignSelf="center" zIndex={2} mt="40">
					<InputLabel labelText="Where are you staying" />

					<GooglePlacesInput
						pressFunction={assignLocation}
						queryType="establishment"
						placeholder="Select where you are staying on your trip"
					/>
				</View>

				<Box mt="24">
					{!formValidation.location && <Text color="error.600">This is required.</Text>}
					<DateRangePicker
						name="Pick your dates"
						startDate={startDate}
						setStartDate={setStartDate}
						setEndDate={setEndDate}
						isValid={formValidation.date}
					/>
				</Box>
				<Box mt="8">
					<ButtonCustom
						text="Add Accommodation"
						pressFunction={submitAccommodation}
						alignment="center"
					/>
				</Box>
				<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
			</View>
		</DismissKeyboard>
	);
}

export default AddAccomScreen;
