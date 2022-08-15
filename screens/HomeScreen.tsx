import { View, Text, Pressable } from 'native-base';
import React from 'react';
import { HomePageScreenProps } from '../types';

// type Props = {};

function HomeScreen({ navigation }: HomePageScreenProps<'Home'>) {
	return (
		<View flex={1} justifyContent="center" alignItems="center">
			<Pressable
				onPress={() => {
					navigation.navigate('Auth');
				}}
			>
				<Text>HomeScreen</Text>
			</Pressable>
		</View>
	);
}

export default HomeScreen;
