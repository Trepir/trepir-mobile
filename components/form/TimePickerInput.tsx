import RNDateTimePicker, {
	DateTimePickerAndroid,
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Box, Pressable, Text } from 'native-base';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
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
			{Platform.OS === 'ios' ? (
				<RNDateTimePicker
					style={styles.timePicker}
					mode="time"
					value={time.value}
					accentColor={time.touched ? 'white' : Colors.primary.normal}
					onChange={(e, date) => onChangeFunction(e, date!)}
				/>
			) : (
				<Pressable
					onPress={() => {
						DateTimePickerAndroid.open({
							value: time.value,
							mode: 'time',
							onChange: (e: DateTimePickerEvent, date: Date | undefined) =>
								onChangeFunction(e, date!),
						});
					}}
				>
					<Text>{time.value.toLocaleString()}</Text>
				</Pressable>
			)}
		</Box>
	);
}

export default TimePickerInput;
