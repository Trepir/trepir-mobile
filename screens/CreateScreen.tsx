import { View, Text, Pressable } from 'native-base';
import React from 'react';
import { RootTabScreenProps } from '../types';

function CreateScreen({ navigation }: RootTabScreenProps<'Create'>) {
	return (
		<View flex={1} justifyContent="center" alignItems="center">
			<Text>CreateScreen</Text>
			<Pressable
				py={5}
				my={5}
				bgColor="amber.300"
				onPress={() => {
					navigation.navigate('NewTravelModal');
				}}
			>
				<Text>Add Travel Modal</Text>
			</Pressable>
			<Pressable
				py={5}
				my={5}
				bgColor="amber.300"
				onPress={() => {
					navigation.navigate('NewAccommodationModal');
				}}
			>
				<Text>Add Accommodation Modal</Text>
			</Pressable>
		</View>
	);
}

export default CreateScreen;
