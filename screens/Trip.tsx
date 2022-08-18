import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'native-base';
import React from 'react';
import { TripStackScreenProps } from '../types';

function Trip({ navigation }: TripStackScreenProps<'Trip'>) {
	return (
		<View>
			<Text>Trip</Text>
			<Pressable
				onPress={() => {
					navigation.navigate('ModifyTrip');
				}}
			>
				<Text>ModifyTrip</Text>
			</Pressable>
		</View>
	);
}

export default Trip;
