import { View, Box, Text } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import DDTravelType from '../components/form/DDTravelType';
import ButtonCustom from '../components/ui/ButtonCustom';
import InputLabel from '../components/ui/InputLabel';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import DatePickerInput from '../components/form/DatePickerInput';
import { Location, RootTabScreenProps } from '../types';
import TextInput from '../components/form/TextInput';
import { storeNewTravel } from '../features/newTravel/newTravelSlice';
import { useAppDispatch } from '../app/hooks';
import { parseLocationDetails } from '../helpers/parseLocationDetails';

function AddTravelScreen({ navigation }: RootTabScreenProps<'Create'>) {
	const travelTypes = [
		{
			label: 'Flight',
			value: 'Flight',
		},
		{
			label: 'Bus',
			value: 'Bus',
		},
		{
			label: 'Boat',
			value: 'Boat',
		},
		{
			label: 'Car',
			value: 'Car',
		},
		{
			label: 'Train',
			value: 'Train',
		},
	];

	const dispatch = useAppDispatch();

	const [date, setDate] = useState({ value: new Date(), touched: false });
	const [typeValue, setTypeValue] = useState('');
	const [originValidation, setOriginValidation] = useState({
		touched: false,
		valid: false,
	});
	const [destinationValidation, setDestinationValidation] = useState({
		touched: false,
		valid: false,
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		defaultValues: {
			travelType: '',
			departure: Date.now(),
			origin: new Location(),
			destination: new Location(),
			flightNumber: null,
		},
	});

	const assignOrigin = (_: any, details: GooglePlaceDetail) => {
		const locationData = parseLocationDetails(details);
		setOriginValidation({
			touched: true,
			valid: true,
		});
		setValue('origin', locationData, { shouldValidate: true });
	};
	const assignDestination = (_: any, details: GooglePlaceDetail) => {
		const locationData = parseLocationDetails(details);
		setDestinationValidation({
			touched: true,
			valid: true,
		});
		setValue('destination', locationData, { shouldValidate: true });
	};

	const onSubmit = (data: any) => {
		dispatch(storeNewTravel({ uid: '123456789', ...data }));
		navigation.goBack();
	};

	const submitFunction = () => {
		if (!originValidation.valid) {
			setOriginValidation({ ...originValidation, touched: true });
		}
		if (!destinationValidation.valid) {
			setDestinationValidation({ ...destinationValidation, touched: true });
		}
		handleSubmit(onSubmit)();
	};

	return (
		<DismissKeyboard>
			<View flex={1} px="10" pt="4">
				<View position="absolute" mt={4} width="100%" alignSelf="center" zIndex={11}>
					<InputLabel labelText="Origin place" />
					<GooglePlacesInput
						pressFunction={assignOrigin}
						queryType="establishment"
						placeholder="Origin"
					/>
					{originValidation.touched && !originValidation.valid && (
						<Text color="error.600">This is required.</Text>
					)}
				</View>
				<View
					position="absolute"
					mt="24"
					pt={originValidation.touched && !originValidation.valid ? '6' : '4'}
					width="100%"
					alignSelf="center"
					zIndex={10}
				>
					<InputLabel labelText="Destination place" />
					<GooglePlacesInput
						pressFunction={assignDestination}
						queryType="establishment"
						placeholder="Destination"
					/>
					{destinationValidation.touched && !destinationValidation.valid && (
						<Text color="error.600">This is required.</Text>
					)}
				</View>

				<Box mt={destinationValidation.touched && !destinationValidation.valid ? '56' : '48'} />
				<InputLabel labelText="Set the trip date" />
				<Box alignSelf="center">
					<DatePickerInput
						date={date}
						onChangeFunction={(e, newDate) => {
							setDate({ value: newDate!, touched: true });
							setValue('departure', newDate.getTime(), { shouldValidate: true });
						}}
						name="departure"
						control={control}
						errors={errors}
					/>
				</Box>

				<InputLabel labelText="How are you traveling?" />
				<DDTravelType
					dropDownItems={travelTypes}
					name="travelType"
					control={control}
					errors={errors}
					placeholder="Type of Travel"
					setValue={setValue}
					min={1}
					max={1}
					trackValue={(value) => setTypeValue(value)}
				/>
				{typeValue === 'Flight' ? (
					<View mt="2">
						<TextInput
							control={control}
							errors={errors}
							name="flight number"
							placeholder="Input your flight number..."
							isRequired={false}
						/>
						<Box mt="6">
							<ButtonCustom alignment="center" pressFunction={submitFunction} text="Add Travel" />
						</Box>
					</View>
				) : (
					<Box mt="6">
						<ButtonCustom alignment="center" pressFunction={submitFunction} text="Add Travel" />
					</Box>
				)}
			</View>
		</DismissKeyboard>
	);
}

export default AddTravelScreen;
