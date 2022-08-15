import { View, Text, Pressable } from 'native-base';
import React from 'react';
// import * as SecureStore from 'expo-secure-store';
import { HomePageScreenProps } from '../types';

// type Props = {};

function HomeScreen({ navigation }: HomePageScreenProps<'HomeScreen'>) {
	return (
		<View flex={1} justifyContent="center" alignItems="center">
			<Pressable
				onPress={() => {
					navigation.navigate('Login');
				}}
			>
				<Text>HomeScreen</Text>
			</Pressable>
		</View>
	);
}

export default HomeScreen;
