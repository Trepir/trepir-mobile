import { View, Text, Pressable } from 'native-base';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { RootTabScreenProps } from '../types';
import { useAppDispatch } from '../app/hooks';
import { storeNewAuth } from '../features/auth/authSlice';

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
		<View flex={1} justifyContent="center" alignItems="center">
			<Pressable
				onPress={() => {
					navigation.navigate('NewActivityModal');
				}}
			>
				<Text>DashboardScreen</Text>
			</Pressable>

			<Pressable py={5} my={5} bgColor="amber.300" onPress={handlePress}>
				<Text>@@@@@@@@@@@@@@ Logout @@@@@@@@@@@@@@@@</Text>
			</Pressable>
		</View>
	);
}

export default DashboardScreen;
