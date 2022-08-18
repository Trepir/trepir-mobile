import { View, Box, ScrollView } from 'native-base';
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

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		defaultValues: {
			type: '',
			departure: Date.now(),
			origin: new Location(),
			destination: new Location(),
			flightNumber: null,
		},
	});

	const assignOrigin = (_: any, details: GooglePlaceDetail) => {
		const locationData = parseLocationDetails(details);
		setValue('origin', locationData, { shouldValidate: true });
	};
	const assignDestination = (_: any, details: GooglePlaceDetail) => {
		const locationData = parseLocationDetails(details);
		setValue('destination', locationData, { shouldValidate: true });
	};

	const onSubmit = (data: any) => {
		console.log(data);
		dispatch(storeNewTravel({ uid: '1', ...data }));
		navigation.goBack();
	};

	return (
		<DismissKeyboard>
			<View flex={1} px="10">
				<Box mt="8">
					<InputLabel labelText="How are you traveling?" />
					<DDTravelType
						dropDownItems={travelTypes}
						name="type"
						control={control}
						errors={errors}
						placeholder="Type of Travel"
						setValue={setValue}
						min={1}
						max={1}
						trackValue={(value) => setTypeValue(value)}
					/>

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
					{typeValue === 'Flight' ? (
						<View mt="48">
							<TextInput
								control={control}
								errors={errors}
								name="flight number"
								placeholder="Input your flight number..."
								isRequired={false}
							/>
							<Box mt="16">
								<ButtonCustom
									alignment="center"
									pressFunction={handleSubmit(onSubmit)}
									text="Add Travel"
								/>
							</Box>
						</View>
					) : (
						<Box mt="56">
							<ButtonCustom
								alignment="center"
								pressFunction={handleSubmit(onSubmit)}
								text="Add Travel"
							/>
						</Box>
					)}
				</Box>
				<View position="absolute" mt="48" width="100%" alignSelf="center" zIndex={1}>
					<InputLabel labelText="Origin place" />
					<GooglePlacesInput
						pressFunction={assignOrigin}
						queryType="establishment"
						placeholder="Origin"
					/>
					{/* {errors.origin && <Text color="error.600">This is required.</Text>} */}
				</View>
				<View position="absolute" mt="72" width="100%" alignSelf="center" zIndex={0}>
					<InputLabel labelText="Destination place" />
					<GooglePlacesInput
						pressFunction={assignDestination}
						queryType="establishment"
						placeholder="Destination"
					/>
					{/* {errors.destination && <Text color="error.600">This is required.</Text>} */}
				</View>
			</View>
		</DismissKeyboard>
	);
}

export default AddTravelScreen;
