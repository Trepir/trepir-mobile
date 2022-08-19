import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { Box, Divider, Heading, HStack, ScrollView, Text, View } from 'native-base';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import TextInputForm from '../components/form/TextInput';
import TextAreaInput from '../components/form/TextAreaInput';
import NumberInput from '../components/form/NumberInput';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import ButtonCustom from '../components/ui/ButtonCustom';
import GoogleIcon from '../assets/icons/GoogleIcon';
import InputLabel from '../components/ui/InputLabel';
import { useAppDispatch } from '../app/hooks';
import { storeNewActivity } from '../features/newActivity/newActivitySlice';
import TimePickerInput from '../components/form/TimePickerInput';
import DropDown from '../components/form/DropDown';
import { Location, RootTabScreenProps } from '../types';
import { parseLocationDetails } from '../helpers/parseLocationDetails';
import { ActivityTags } from '../constants/ActivityTags';
import ApiKeys from '../constants/ApiKeys';

// For ANDROID => READ THE DOCS
// DateTimePickerAndroid.open(params: AndroidNativeProps)
// DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])

// FULLSCREEN MODAL
export default function AddActivityModal({ navigation }: RootTabScreenProps<'Create'>) {
	const dispatch = useAppDispatch();

	const [timeStart, setTimeStart] = useState({
		value: new Date(),
		touched: false,
	});
	const [timeEnd, setTimeEnd] = useState({
		value: new Date(),
		touched: false,
	});
	const [locationValidation, setLocationValidation] = useState({
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
			name: '',
			duration: 0,
			description: '',
			timeStart: Date.now(),
			timeEnd: Date.now(),
			tags: [''],
			return: null,
			location: new Location(),
			imageUrl: '',
		},
	});

	const getLocationData = (_: any, details: GooglePlaceDetail) => {
		const locationData = parseLocationDetails(details);
		// @ts-ignore
		const imgReference = details.photos[0].photo_reference;
		// @ts-ignore
		const imgWidth = details.photos[0].width;
		const imgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${imgWidth}&photoreference=${imgReference}&key=${ApiKeys.googleMapsAPIKey}`;

		setValue('location', locationData, { shouldValidate: true });
		setValue('imageUrl', imgUrl, { shouldValidate: true });
	};
	const onSubmit = (data: any) => {
		dispatch(storeNewActivity({ uid: '1', id: '', ...data }));
		navigation.goBack();
	};
	const submitFunction = () => {
		if (!locationValidation.valid) {
			setLocationValidation({ ...locationValidation, touched: true });
		}
		handleSubmit(onSubmit)();
	};

	return (
		<DismissKeyboard>
			<ScrollView flex={1} px="10" keyboardShouldPersistTaps="handled">
				{/* WHEN THIS IS ACTIVE I HAVE TO TOP THE SCROLLING OF THE MODAL  */}
				<HStack alignSelf="center" alignItems="center">
					<GoogleIcon size={25} />
					<Heading fontSize="lg" fontWeight="semibold" my={4} ml={2}>
						Select a Location for your Activity
					</Heading>
				</HStack>

				<View position="absolute" width="100%" alignSelf="center" zIndex={2} mt={16}>
					<GooglePlacesInput
						placeholder="Select a Location for your Activity"
						pressFunction={getLocationData}
						queryType="establishment"
					/>
					{locationValidation.touched && !locationValidation.valid && (
						<Text color="error.600">This is required.</Text>
					)}
				</View>

				<View flex={1} mt={locationValidation.touched && !locationValidation.valid ? 24 : 16}>
					<Divider mb={2} />
					<TextInputForm
						name="name"
						control={control}
						errors={errors}
						placeholder="Activity Name"
					/>
					<TextAreaInput
						name="description"
						control={control}
						errors={errors}
						placeholder="Give a short description..."
					/>

					<NumberInput name="duration" control={control} errors={errors} placeholder="0" />

					<InputLabel labelText="Pick a time range (Optional)" />
					<HStack alignSelf="center" alignItems="center">
						<TimePickerInput
							time={timeStart}
							onChangeFunction={(e, date) => {
								setTimeStart({ value: date!, touched: true });
								setValue('timeStart', date.getTime(), { shouldValidate: true });
							}}
						/>
						<Text fontWeight="bold"> - </Text>
						<TimePickerInput
							time={timeEnd}
							onChangeFunction={(e, date) => {
								setTimeEnd({ value: date!, touched: true });
								setValue('timeEnd', date.getTime(), { shouldValidate: true });
							}}
						/>
					</HStack>

					<InputLabel labelText="Pick some Tags" />
					<DropDown
						name="tags"
						control={control}
						errors={errors}
						placeholder="Select up to three tags"
						setValue={setValue}
						dropDownItems={ActivityTags}
						min={1}
						max={3}
					/>
					<Box my={8}>
						<ButtonCustom
							pressFunction={submitFunction}
							text="Create Activity"
							alignment="center"
						/>
					</Box>

					{/* Use a light status bar on iOS to account for the black space above the modal */}
					<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
				</View>
			</ScrollView>
		</DismissKeyboard>
	);
}

/* <Controller
	control={control}
	rules={{
		required: true,
	}}
	render={({ field: { onChange, onBlur, value } }) => (
		<>
			<Text> Name </Text>
			<Input
				bgColor={'white'}
				width={'70%'}
				onBlur={onBlur}
				onChangeText={onChange}
				value={value}
			/>
		</>
	)}
	name="name"
/> */
