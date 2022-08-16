import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Box } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

type Props = {
	time: {
		value: Date;
		touched: boolean;
	};
	// eslint-disable-next-line no-unused-vars
	onChangeFunction: (e: DateTimePickerEvent, date: Date) => void;
};

function TimePickerInput({ time, onChangeFunction }: Props) {
	const styles = StyleSheet.create({
		timePicker: {
			backgroundColor: time.touched ? Colors.primary.normal : '',
			width: 90,
			borderRadius: 4,
		},
	});
	return (
		<Box w="90" rounded="full">
			<RNDateTimePicker
				style={styles.timePicker}
				mode="time"
				value={time.value}
				accentColor={time.touched ? 'white' : Colors.primary.normal}
				onChange={(e, date) => onChangeFunction(e, date!)}
			/>
		</Box>
	);
}

export default TimePickerInput;
