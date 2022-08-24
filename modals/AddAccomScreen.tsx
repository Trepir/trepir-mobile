import { Box, HStack, Text, View } from 'native-base';
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
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { storeNewAccommodation } from '../features/newAccommodation/newAccommodationSlice';
import DateRangePicker from '../components/form/DateRangePicker';
import TopViewActivity from '../components/activity/TopViewActivity';
import TimePickerInput from '../components/form/TimePickerInput';

function AddAccomScreen({ navigation }: RootTabScreenProps<'Create'>) {
	const dispatch = useAppDispatch();
	const userId = useAppSelector((state) => state.user.uid);

	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [formValidation, setFormValidation] = useState({
		date: true,
		location: true,
	});
	const [location, setLocation] = useState(new Location());
	const [checkInTime, setCheckInTime] = useState({
		value: new Date(Date.now()),
		touched: false,
	});
	const [checkOutTime, setCheckOutTime] = useState({
		value: new Date(Date.now()),
		touched: false,
	});

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
			const formattedStartDate = new Date(
				new Date(startDate).setHours(
					checkInTime.value.getHours() + 2,
					checkInTime.value.getMinutes()
				)
			).toISOString();
			const formattedEndDate = new Date(
				new Date(endDate).setHours(
					checkOutTime.value.getHours() + 2,
					checkOutTime.value.getMinutes()
				)
			).toISOString();

			dispatch(
				storeNewAccommodation({
					uid: userId,
					startDate: formattedStartDate,
					endDate: formattedEndDate,
					location,
				})
			);
			navigation.goBack();
		}
	};

	return (
		<>
			<TopViewActivity title="Add an Accommodation" />
			<DismissKeyboard>
				<View flex={1} px="10">
					<View position="absolute" width="100%" alignSelf="center" zIndex={2} mt="4">
						<InputLabel labelText="Where are you staying" />

						<GooglePlacesInput
							pressFunction={assignLocation}
							queryType="establishment"
							placeholder="Select where you are staying on your trip"
						/>
					</View>

					<Box mt="24">
						{!formValidation.location && (
							<Text color="error.600" mt={4}>
								This is required.
							</Text>
						)}
						<DateRangePicker
							name="Pick your dates"
							startDate={startDate}
							setStartDate={setStartDate}
							setEndDate={setEndDate}
							isValid={formValidation.date}
						/>
					</Box>

					<InputLabel labelText="Checkin & Checkout" />
					<HStack justifyContent="space-evenly">
						<TimePickerInput
							time={checkInTime}
							onChangeFunction={(e, date) => {
								setCheckInTime({ value: date, touched: true });
							}}
						/>
						<TimePickerInput
							time={checkOutTime}
							onChangeFunction={(e, date) => {
								setCheckOutTime({ value: date, touched: true });
							}}
						/>
					</HStack>
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
		</>
	);
}

export default AddAccomScreen;
