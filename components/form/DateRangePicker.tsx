import { Text } from 'native-base';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { DateData, Theme } from 'react-native-calendars/src/types';
import Colors from '../../constants/Colors';
import { generateDateRange } from '../../helpers/generateDayRange';
import InputLabel from '../ui/InputLabel';

const styles = StyleSheet.create({
	calendar: {
		borderWidth: 2,
		borderColor: Colors.primary.normal,
		borderRadius: 10,
	},
});

const calendarTheme: Theme = {
	backgroundColor: '#ffffff',
	calendarBackground: '#ffffff',
	textSectionTitleColor: '#b6c1cd',
	textSectionTitleDisabledColor: '#d9e1e8',
	selectedDayBackgroundColor: '#00adf5',
	selectedDayTextColor: '#ffffff',
	todayTextColor: Colors.primary.normal,
	dayTextColor: '#2d4150',
	textDisabledColor: '#d9e1e8',
	dotColor: '#00adf5',
	selectedDotColor: '#ffffff',
	arrowColor: Colors.primary.normal,
	disabledArrowColor: '#d9e1e8',
	textDayFontWeight: '300',
	textMonthFontWeight: '500',
	textDayHeaderFontWeight: '400',
};
type Props = {
	name: string;
	startDate: string;
	setStartDate: Dispatch<SetStateAction<string>>;
	setEndDate: Dispatch<SetStateAction<string>>;
	isValid: boolean;
};

function DateRangePicker({ name, startDate, setStartDate, setEndDate, isValid }: Props) {
	const [dateToggle, setDateToggle] = useState(true);
	const [dateRange, setDateRange] = useState({});

	const selectDay = (day: DateData) => {
		if (dateToggle) {
			setStartDate(day.dateString);
			setDateRange({
				[day.dateString]: { startingDay: true, color: Colors.primary.dark, textColor: 'white' },
			});
		} else if (new Date(startDate).getTime() < day.timestamp) {
			setEndDate(day.dateString);
			setDateRange(generateDateRange(startDate, day.dateString));
		} else {
			setDateRange({});
		}

		setDateToggle(!dateToggle);
	};

	return (
		<>
			<InputLabel labelText={name} />
			<Calendar
				style={styles.calendar}
				theme={calendarTheme}
				initialDate={new Date(Date.now()).toISOString().split('T')[0]}
				minDate={new Date(Date.now()).toISOString().split('T')[0]}
				onDayPress={(day) => selectDay(day)}
				markingType="period"
				markedDates={dateRange}
			/>
			{!isValid && <Text color="error.600">This is required.</Text>}
		</>
	);
}

export default DateRangePicker;
