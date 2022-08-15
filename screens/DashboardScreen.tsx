import { View, Text, Pressable } from 'native-base';
import React from 'react';
import { RootTabScreenProps } from '../types';

// type Props = {};

function DashboardScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
	return (
		<View flex={1} justifyContent="center" alignItems="center">
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
