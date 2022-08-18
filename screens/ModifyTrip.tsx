import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'native-base';
import React from 'react';
import { TripStackScreenProps } from '../types';

function ModifyTrip({ navigation }: TripStackScreenProps<'ModifyTrip'>) {
	// const navigation = useNavigation();
	// navigation.navigate('TripStack');
	return (
		<View>
			<Text>ModifyTrip</Text>
			<Pressable
				onPress={() => {
					navigation.navigate('Trip');
				}}
			>
				<Text>Back to trip</Text>
			</Pressable>
		</View>
	);
}

export default ModifyTrip;
