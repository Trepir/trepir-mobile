import { View } from 'native-base';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { DateData, Theme } from 'react-native-calendars/src/types';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import InputLabel from '../components/ui/InputLabel';
import Colors from '../constants/Colors';
import { generateDateRange } from '../helpers/generateDayRange';

function AddAccomScreen() {
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

	const [dateToggle, setDateToggle] = useState(true);
	const [dateRange, setDateRange] = useState({});
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const selectDay = (day: DateData) => {
		const canEnter =
			// eslint-disable-next-line no-nested-ternary
			startDate === '' || endDate === ''
				? true
				: dateToggle
				? new Date(endDate) > new Date(day.dateString)
				: new Date(day.dateString) > new Date(startDate);

		if (canEnter) {
			if (dateToggle) {
				setStartDate(day.dateString);
				if (startDate !== '') {
					setDateRange(generateDateRange(day.dateString, endDate));
				} else {
					setDateRange({
						[day.dateString]: { startingDay: true, color: Colors.primary.dark, textColor: 'white' },
					});
				}
			} else {
				setEndDate(day.dateString);
				setDateRange(generateDateRange(startDate, day.dateString));
			}
		}
		setDateToggle(!dateToggle);
	};

	return (
		<DismissKeyboard>
			<View flex={1} px="10">
				<InputLabel labelText="Where are you staying" />

				<InputLabel labelText="Pick your Dates" />
				<Calendar
					style={{
						borderWidth: 2,
						borderColor: Colors.primary.normal,
						borderRadius: 10,
					}}
					theme={calendarTheme}
					initialDate={new Date(Date.now()).toISOString().split('T')[0]}
					minDate={new Date(Date.now()).toISOString().split('T')[0]}
					onDayPress={(day) => selectDay(day)}
					markingType="period"
					markedDates={dateRange}
				/>
			</View>
		</DismissKeyboard>
	);
}

export default AddAccomScreen;
