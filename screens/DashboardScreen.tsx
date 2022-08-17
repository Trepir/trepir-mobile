import { View, Text, Pressable, Image } from 'native-base';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { RootTabScreenProps } from '../types';
import { useAppDispatch } from '../app/hooks';
import { storeNewAuth } from '../features/auth/authSlice';
import Colors from '../constants/Colors';
import ButtonCustom from '../components/ui/ButtonCustom';
import TopView from '../components/Dashboard/TopView';
import TripCarousel from '../components/TripCarousel';

function DashboardScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
	// const activityStore = useAppSelector((state) => state.newActivity);
	// useEffect(() => {
	// 	console.log(activityStore);
	// }, [activityStore]);
	const dispatch = useAppDispatch();
	const handlePress = async () => {
		dispatch(storeNewAuth(null));
		try {
			await SecureStore.deleteItemAsync('user');
			const result = await SecureStore.getItemAsync('user');
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View flex={1} justifyContent="flex-start" flexDirection="column">
			<TopView />
			<View flex={1} backgroundColor={Colors.grey.offWhite}>
				<TripCarousel tittle={'Upcoming trips'} />
			</View>
		</View>
	);
}

export default DashboardScreen;
