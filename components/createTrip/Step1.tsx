import { preventAutoHideAsync } from 'expo-splash-screen';
import { View, Box } from 'native-base';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { parseLocationDetails } from '../../helpers/parseLocationDetails';
import { newTripType } from '../../screens/CreateScreen';
import { Location } from '../../types';
import DateRangePicker from '../form/DateRangePicker';
import TextInput from '../form/TextInput';
import ButtonCustom from '../ui/ButtonCustom';
import InputLabel from '../ui/InputLabel';
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

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		defaultValues: {
			name: '',
			startDate: '',
			endDate: '',
			location: new Location(),
		},
	});

	const assignLocation = (_: any, details: GooglePlaceDetail) => {
		const locationData = parseLocationDetails(details);
		setValue('location', locationData, { shouldValidate: true });
	};

	const onSubmit = (data: any) => {
		console.log(data);
		setNewTrip((prev) => ({ ...prev, ...data }));
		jumpTo('second');
	};

	const validateDates = () => startDate !== '' && endDate !== '';
	return (
		<View flex={1} px={10}>
			<TextInput
				name="Trip name"
				control={control}
				errors={errors}
				placeholder="Pick a name for your trip..."
			/>
			<View
				position="absolute"
				width="100%"
				alignSelf="center"
				zIndex={2}
				mt={errors.name ? '20' : '24'}
			>
				<InputLabel labelText="Where are you going" />

				<GooglePlacesInput
					pressFunction={assignLocation}
					queryType={['(cities)', '(regions)']}
					placeholder="Select the initial Location of your trip..."
				/>
			</View>
			<Box mt={24}>
				<DateRangePicker
					name="Pick your dates"
					startDate={startDate}
					setStartDate={setStartDate}
					setEndDate={setEndDate}
					isValid={formValidation}
				/>
			</Box>

			<Box mt="8">
				<ButtonCustom
					text="Next Step"
					pressFunction={() => {
						setFormValidation(validateDates());
						handleSubmit(onSubmit)();
					}}
					alignment="flex-end"
				/>
			</Box>
		</View>
	);
}

export default Step1;
