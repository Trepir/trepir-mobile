import { ScrollView, View } from 'native-base';
import React from 'react';
import Colors from '../constants/Colors';
import TopView from '../components/Dashboard/TopView';
import TripCarousel from '../components/TripCarousel';
import { useAppSelector } from '../app/hooks';

function DashboardScreen() {
	const user = useAppSelector((state) => state.user);

	if (user) {
		return (
			<View flex={1} justifyContent="flex-start" flexDirection="column">
				<TopView user={user} />
				<ScrollView flex={1} zIndex={1} backgroundColor={Colors.grey.offWhite}>
					<TripCarousel type="upcoming" />
					<TripCarousel type="past" />
				</ScrollView>
			</View>
		);
	}
	return <View />;
}

export default DashboardScreen;
