import * as SecureStore from 'expo-secure-store';
import { View, Text, Pressable } from 'native-base';
import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { storeNewAuth } from '../features/auth/authSlice';

function DiscoverScreen() {
	const dispatch = useAppDispatch();
	const handlePress = async () => {
		dispatch(storeNewAuth({ token: null }));
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
			<Pressable py={5} my={5} bgColor="amber.300" onPress={handlePress}>
				<Text>@@@@@@@@@@@@@@ Logout @@@@@@@@@@@@@@@@</Text>
			</Pressable>
		</View>
	);
}

export default DiscoverScreen;
