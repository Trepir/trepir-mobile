import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

import {
	Button,
	Input,
	KeyboardAvoidingView,
	Pressable,
	ScrollView,
	Slider,
	Text,
	View,
} from 'native-base';
import { useForm, Controller, Control, FieldValues } from 'react-hook-form';
import TextInput from '../components/form/TextInput';
import TextAreaInput from '../components/form/TextAreaInput';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
//For ANDROID => READ THE DOCS
// DateTimePickerAndroid.open(params: AndroidNativeProps)
// DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])

//FORM CONTROL TYPE EXPORT => MOVE IT IF NECESSARY
export type ActivityFormControl = Control<
	{
		name: string;
		duration: number;
		description: string;
		time: Date;
		tags: string[];
	},
	any
>;

//FULLSCREEN MODAL
export default function AddActivityModal() {
	const [time, setTime] = useState(new Date());
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			duration: 0,
			description: '',
			time: new Date(Date.now()),
			tags: [''],
		},
	});

	const onSubmit = (data: any) => console.log(data);
	return (
		<DismissKeyboard>
			<View flex={1}>
				{/* WHEN THIS IS ACTIVE I HAVE TO TOP THE SCROLLING OF THE MODAL  */}
				<GooglePlacesInput />

				<ScrollView flex={1} contentContainerStyle={{ alignItems: 'center' }} mt={'1/4'}>
					<TextInput
						name={'name'}
						control={control}
						errors={errors}
						placeholder={'Activity Name'}
					/>
					<TextAreaInput
						name={'description'}
						control={control}
						errors={errors}
						placeholder={'Activity Name'}
					/>

					<Pressable w={100} h={100}>
						<RNDateTimePicker
							mode="time"
							value={time}
							onChange={(e, date) => {
								console.log(date);
								setTime(date!);
							}}
						/>
					</Pressable>

					{/* Have To USE THE FIX FOR THE SCROLLABLE CONTENT */}
					<Text>Duration</Text>
					<Slider defaultValue={70} colorScheme="emerald">
						<Slider.Track>
							<Slider.FilledTrack />
						</Slider.Track>
						<Slider.Thumb />
					</Slider>

					<Pressable onPress={handleSubmit(onSubmit)}>
						<Text>SUBMIT</Text>
					</Pressable>

					{/* Use a light status bar on iOS to account for the black space above the modal */}
					<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
				</ScrollView>
			</View>
		</DismissKeyboard>
	);
}

{
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
}
