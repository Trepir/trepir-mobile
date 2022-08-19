import RNDateTimePicker, {
	DateTimePickerEvent,
	DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import { Box, Pressable, Text } from 'native-base';
import React, { useState } from 'react';
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form';
import { Platform, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

type Props = {
	date: {
		value: Date;
		touched: boolean;
	};
	name: string;
	// This variables are form specif
	control: Control<any>;
	errors: FieldErrorsImpl;
	// eslint-disable-next-line no-unused-vars
	onChangeFunction: (e: DateTimePickerEvent, date: Date) => void;
};

function TimePickerInput({ name, control, errors, date, onChangeFunction }: Props) {
	const styles = StyleSheet.create({
		timePicker: {
			backgroundColor: date.touched ? Colors.primary.normal : '',
			width: 80,
			borderRadius: 4,
		},
	});
	const [isValid, setIsValid] = useState(false);
	return (
		<>
			<Controller
				name={name as 'name'}
				control={control}
				rules={{
					required: true,
					validate: () => {
						if (isValid && date.touched) return true;
						return false;
					},
				}}
				render={() => (
					<Box
						px={4}
						py={2}
						borderRadius={12}
						alignItems="center"
						bgColor={date.touched ? Colors.primary.normal : ''}
					>
						{Platform.OS === 'ios' ? (
							<RNDateTimePicker
								style={styles.timePicker}
								value={date.value}
								minimumDate={new Date(Date.now())}
								accentColor={date.touched ? 'white' : Colors.primary.normal}
								onChange={(e, newDate) => {
									setIsValid(true);
									onChangeFunction(e, newDate!);
								}}
							/>
						) : (
							<Pressable
								onPress={() => {
									DateTimePickerAndroid.open({
										value: date.value,
										mode: 'date',
										minimumDate: new Date(Date.now()),
										onChange: (e, newDate) => {
											setIsValid(true);
											onChangeFunction(e, newDate!);
										},
									});
								}}
							>
								<Text color={date.touched ? 'white' : ''}>
									{date.value.toISOString().split('T')[0]}
								</Text>
							</Pressable>
						)}
					</Box>
				)}
			/>
			{errors[name] && !isValid && <Text color="error.600">This is required.</Text>}
		</>
		// <Box
		// 	px={4}
		// 	py={2}
		// 	rounded="xl"
		// 	alignItems="center"
		// 	bgColor={date.touched ? Colors.primary.normal : ''}
		// >
		// 	<RNDateTimePicker
		// 		style={styles.timePicker}
		// 		value={date.value}
		// 		accentColor={date.touched ? 'white' : Colors.primary.normal}
		// 		onChange={(e, newDate) => onChangeFunction(e, newDate!)}
		// 	/>
		// </Box>
	);
}

export default TimePickerInput;
