import { View } from 'native-base';
import React, { useState } from 'react';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import TopView from '../components/Dashboard/TopView';
import TripCarousel from '../components/TripCarousel';

function DashboardScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
	// const activityStore = useAppSelector((state) => state.newActivity);
	// useEffect(() => {
	// 	console.log(activityStore);
	// }, [activityStore]);
	const [user, setUser] = useState({
		userName: 'DeVittoz',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
	});

	// WHEN A USER IS CREATED AND STORED IN REDUX, THIS FUNCTION IS CALLED
	// useEffect(() => {
	// 	const user: user = dispatch(hereWeGetTheUser);
	// 	setPhoto(user.photo);
	// 	setUserName(user.userName);
	// }, []);

	return (
		<View flex={1} justifyContent="flex-start" flexDirection="column">
			<TopView user={user} />
			<View flex={1} backgroundColor={Colors.grey.offWhite}>
				<TripCarousel type="upcoming" />
				<TripCarousel type="past" />
			</View>
		</View>
	);
}

export default DashboardScreen;
