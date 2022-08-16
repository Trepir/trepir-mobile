import { Box, Divider, Pressable, Text, View } from 'native-base';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { DateData, Theme } from 'react-native-calendars/src/types';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import InputLabel from '../components/ui/InputLabel';
import Colors from '../constants/Colors';
import { generateDateRange } from '../helpers/generateDayRange';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import ButtonCustom from '../components/ui/ButtonCustom';

const styles = StyleSheet.create({
	calendar: {
		borderWidth: 2,
		borderColor: Colors.primary.normal,
		borderRadius: 10,
	},
});

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
		if (dateToggle) {
			setStartDate(day.dateString);

			setDateRange({
				[day.dateString]: { startingDay: true, color: Colors.primary.dark, textColor: 'white' },
			});
		} else {
			setEndDate(day.dateString);
			setDateRange(generateDateRange(startDate, day.dateString));
		}

		setDateToggle(!dateToggle);
	};

	const pressFunction = (data: any, details: any) => {
		console.log('press');
	};

	const press = () => {
		console.log('WY');
	};

	return (
		<DismissKeyboard>
			<View flex={1} px="10">
				<InputLabel labelText="Add your trip by Email" />
				<Pressable bgColor="red.400" alignSelf="center" rounded="xl" mt="2">
					<Text color="white" px={10} py={5} fontSize="lg" fontWeight="bold">
						Input an Email Reservation{' '}
					</Text>
				</Pressable>
				<Divider mt="8" />

				<View position="absolute" width="100%" alignSelf="center" zIndex={2} mt="40">
					<InputLabel labelText="Where are you staying" />

					<GooglePlacesInput
						pressFunction={pressFunction}
						queryType="establishment"
						placeholder="Select where you are staying on your trip"
					/>
				</View>

				<Box mt="24">
					<InputLabel labelText="Pick your Dates" />
					<Calendar
						style={styles.calendar}
						theme={calendarTheme}
						initialDate={new Date(Date.now()).toISOString().split('T')[0]}
						minDate={new Date(Date.now()).toISOString().split('T')[0]}
						onDayPress={(day) => selectDay(day)}
						markingType="period"
						markedDates={dateRange}
					/>
				</Box>
				<Box mt="8">
					<ButtonCustom text="Add Accommodation" pressFunction={press} alignment="center" />
				</Box>
				<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
			</View>
		</DismissKeyboard>
	);
}

export default AddAccomScreen;
