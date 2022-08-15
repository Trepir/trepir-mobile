import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { Box, Divider, Heading, HStack, View } from 'native-base';
import { useForm, Control } from 'react-hook-form';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import TextInputForm from '../components/form/TextInput';
import TextAreaInput from '../components/form/TextAreaInput';
import NumberInput from '../components/form/NumberInput';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import Colors from '../constants/Colors';
import ButtonCustom from '../components/ui/ButtonCustom';
import GoogleIcon from '../assets/icons/GoogleIcon';
import InputLabel from '../components/ui/InputLabel';
import { useAppDispatch } from '../app/hooks';
import { storeNewActivity } from '../features/newActivity/newActivitySlice';

// For ANDROID => READ THE DOCS
// DateTimePickerAndroid.open(params: AndroidNativeProps)
// DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])

// FORM CONTROL TYPE EXPORT => MOVE IT IF NECESSARY
export type ActivityFormControl = Control<
	{
		name: string;
		description: string;
		duration: number;
		time: number;
		tags: string[];
	},
	any
>;

// FULLSCREEN MODAL
export default function AddActivityModal() {
	const dispatch = useAppDispatch();

	const [time, setTime] = useState({
		value: new Date(),
		touched: false,
	});

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState([]);
	const [items, setItems] = useState([
		{ label: 'Apple', value: 'apple' },
		{ label: 'Banana', value: 'banana' },
	]);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			duration: 0,
			description: '',
			time: Date.now(),
			tags: [''],
		},
	});

	const onSubmit = (data: any) => {
		console.log(data);

		// dispatch(storeNewActivity({ creatorId: 1, time: String(data.time), ...data }));
		dispatch(storeNewActivity({ creatorId: '1', ...data }));
	};
	return (
		<DismissKeyboard>
			<View flex={1} px="10">
				{/* WHEN THIS IS ACTIVE I HAVE TO TOP THE SCROLLING OF THE MODAL  */}
				<HStack alignSelf="center" alignItems="center">
					<GoogleIcon size={25} />
					<Heading fontSize="lg" fontWeight="semibold" my={4} ml={2}>
						Select a Location for your Activity
					</Heading>
				</HStack>
				<GooglePlacesInput />

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

					<InputLabel labelText="Set a reminder (Optional)" />

					{/* Could Move to another Component */}
					<Box w="90" alignSelf="center" rounded="full">
						<RNDateTimePicker
							style={{
								backgroundColor: time.touched ? Colors.primary.normal : '',
								width: 90,
								borderRadius: 4,
							}}
							mode="time"
							value={time.value}
							accentColor={time.touched ? 'white' : Colors.primary.normal}
							onChange={(e, date) => {
								console.log(date);
								setTime({ value: date!, touched: true });
							}}
						/>
					</Box>

					<InputLabel labelText="Pick some Tags" />
					<DropDownPicker
						open={open}
						value={value}
						items={items}
						setOpen={setOpen}
						setValue={setValue}
						setItems={setItems}
						multiple
						min={0}
						max={5}
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
