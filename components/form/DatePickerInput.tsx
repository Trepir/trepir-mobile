import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Box, Text } from 'native-base';
import React from 'react';
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form';
import { StyleSheet } from 'react-native';
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
	return (
		<>
			<Controller
				name={name as 'name'}
				control={control}
				rules={{
					required: true,
					validate: () => {
						if (date.touched) return true;
						return false;
					},
				}}
				render={() => (
					<Box
						px={4}
						py={2}
						rounded="xl"
						alignItems="center"
						bgColor={date.touched ? Colors.primary.normal : ''}
					>
						<RNDateTimePicker
							style={styles.timePicker}
							value={date.value}
							accentColor={date.touched ? 'white' : Colors.primary.normal}
							onChange={(e, newDate) => onChangeFunction(e, newDate!)}
						/>
					</Box>
				)}
			/>
			{errors[name] && <Text color="error.600">This is required.</Text>}
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