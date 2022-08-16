import {
	View,
	Text,
	Pressable,
	Box,
	Divider,
	Heading,
	HStack,
	NumberInput,
	StatusBar,
} from 'native-base';
import React, { useState } from 'react';
import { Control, useForm } from 'react-hook-form';
import { Platform } from 'react-native';
import { useAppDispatch } from '../app/hooks';
import GoogleIcon from '../assets/icons/GoogleIcon';
import DropDown from '../components/form/DropDown';
import TextAreaInput from '../components/form/TextAreaInput';
import TimePickerInput from '../components/form/TimePickerInput';
import ButtonCustom from '../components/ui/ButtonCustom';
import InputLabel from '../components/ui/InputLabel';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import { storeNewActivity } from '../features/newActivity/newActivitySlice';
import { createEmailUser } from '../firebase/firebaseFunctions';
import { RootTabScreenProps } from '../types';
import TextInputForm from '../components/form/TextInput';
// import * as SecureStore from 'expo-secure-store';

// type Props = {};
export type LoginFromControl = Control<
	{
		username: string;
		email: string;
		password: string;
	},
	any
>;

// FULLSCREEN MODAL
function Login({ navigation }: RootTabScreenProps<'Dashboard'>) {
	const dispatch = useAppDispatch();

	const [timeStart, setTimeStart] = useState({
		value: new Date(),
		touched: false,
	});
	const [timeEnd, setTimeEnd] = useState({
		value: new Date(),
		touched: false,
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
			location: {},
		},
	});

	const onSubmit = (data: any) => {
		console.log(data);
		dispatch(storeNewActivity({ creatorId: '1', ...data }));
		navigation.goBack();
	};

	return (
		<DismissKeyboard>
			<View flex={1} px="10">
				{/* WHEN THIS IS ACTIVE I HAVE TO TOP THE SCROLLING OF THE MODAL  */}

				<View position="absolute" width="100%" alignSelf="center" zIndex={2} mt={16}>
					<GooglePlacesInput
						placeholder="Select a Location for your Activity"
						pressFunction={getLocationData}
						queryType="establishment"
					/>
				</View>

				<View flex={1} mt="16">
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
					/>

					<Box mt={8}>
						<ButtonCustom
							pressFunction={handleSubmit(onSubmit)}
							text="Create Activity"
							alignment="center"
						/>
					</Box>

					{/* Use a light status bar on iOS to account for the black space above the modal */}
					<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
				</View>
			</View>
		</DismissKeyboard>
	);
}

export default Login;
