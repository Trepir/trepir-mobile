import { View, Box, Text } from 'native-base';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Platform } from 'react-native';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import ApiKeys from '../../constants/ApiKeys';
import Colors from '../../constants/Colors';
import { newTripType } from '../../screens/CreateScreen';
import DateRangePicker from '../form/DateRangePicker';
import TextInput from '../form/TextInput';
import ButtonCustom from '../ui/ButtonCustom';
import InputLabel from '../ui/InputLabel';
import { DismissKeyboard } from '../utils/DismissKeyboard';
import GooglePlacesInput from '../utils/GooglePlacesInput';

type Props = {
	// eslint-disable-next-line no-unused-vars
	jumpTo: (key: string) => void;
	newTrip: newTripType;
	setNewTrip: Dispatch<SetStateAction<newTripType>>;
};

function Step1({ jumpTo, newTrip, setNewTrip }: Props) {
	// const navigation = useNavigation();

	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [formValidation, setFormValidation] = useState(true);
	const [locationValidation, setLocationValidation] = useState({
		touched: false,
		valid: false,
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<newTripType>({
		defaultValues: {
			name: '',
			startDate: '',
			endDate: '',
			googleLocationName: '',
			googlePlaceId: '',
			latitude: 500,
			longitude: 500,
			photoUrl: '',
			formattedAddress: '',
		},
	});

	const assignLocation = (_: GooglePlaceData, details: GooglePlaceDetail) => {
		// @ts-ignore
		const imgReference = details.photos[0].photo_reference;
		// @ts-ignore
		const imgWidth = details.photos[0].width;
		const imgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${imgWidth}&photoreference=${imgReference}&key=${ApiKeys.googleMapsAPIKey}`;

		const locationData = {
			googlePlaceId: details.place_id,
			latitude: details.geometry.location.lat,
			longitude: details.geometry.location.lng,
			photoUrl: imgUrl,
			formattedAddress: details.formatted_address,
			googleLocationName: details.name,
		};
		setLocationValidation({
			touched: true,
			valid: true,
		});
		setValue('googlePlaceId', locationData.googlePlaceId, { shouldValidate: true });
		setValue('latitude', locationData.latitude, { shouldValidate: true });
		setValue('longitude', locationData.longitude, { shouldValidate: true });
		setValue('photoUrl', locationData.photoUrl, { shouldValidate: true });
		setValue('formattedAddress', locationData.formattedAddress, { shouldValidate: true });
		setValue('googleLocationName', locationData.googleLocationName, { shouldValidate: true });
	};

	const onSubmit = (data: any) => {
		console.log(data);
		setNewTrip((prev) => ({ ...prev, ...data }));
		jumpTo('second');
	};
	const validateDates = () => startDate !== '' && endDate !== '';

	const submitFunction = () => {
		setFormValidation(validateDates());
		if (!locationValidation.valid) {
			setLocationValidation({ ...locationValidation, touched: true });
		}
		setValue('startDate', startDate, { shouldValidate: true });
		setValue('endDate', endDate, { shouldValidate: true });

		handleSubmit(onSubmit)();
	};
	return (
		<DismissKeyboard>
			<View flex={1} px={10} bgColor={Colors.grey.offWhite}>
				<TextInput
					name="name"
					control={control}
					errors={errors}
					placeholder="Pick a name for your trip..."
					errorMargin
				/>
				<View position="absolute" width="100%" alignSelf="center" zIndex={2} mt="24">
					<InputLabel labelText="Where are you going" />
					<GooglePlacesInput
						pressFunction={assignLocation}
						queryType="(regions)"
						placeholder="Select the initial Location of your trip..."
					/>
					{locationValidation.touched && !locationValidation.valid && (
						<Text color="error.600">This is required.</Text>
					)}
				</View>
				<Box mt={locationValidation.touched && !locationValidation.valid ? 20 : 24}>
					<DateRangePicker
						name="Pick your dates"
						startDate={startDate}
						setStartDate={setStartDate}
						setEndDate={setEndDate}
						isValid={formValidation}
					/>
				</Box>

				<Box mt={Platform.OS === 'ios' ? '8' : '2'}>
					<ButtonCustom text="Next Step" pressFunction={submitFunction} alignment="flex-end" />
				</Box>
			</View>
		</DismissKeyboard>
	);
}

export default Step1;
