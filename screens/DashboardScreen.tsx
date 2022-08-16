import { View, Text, Pressable } from 'native-base';
import React from 'react';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { useAppSelector } from '../app/hooks';
import { RootTabScreenProps } from '../types';

// type Props = {};

function DashboardScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
	// const activityStore = useAppSelector((state) => state.newActivity);
	// useEffect(() => {
	// 	console.log(activityStore);
	// }, [activityStore]);

	return (
		<View flex={1} justifyContent="center" alignItems="center">
			{/* Multiple of this
			<RNDateTimePicker
				value={new Date()}
				onChange={(e, date) => {
					console.log(date);
				}}
				// maximumDate={}
				// minimumDate={}
			/> */}
			<Pressable
				onPress={() => {
					navigation.navigate('NewActivityModal');
				}}
			>
				<Text>DashboardScreen</Text>
			</Pressable>
		</View>
	);
}

export default DashboardScreen;
