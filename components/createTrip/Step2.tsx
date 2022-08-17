import { useNavigation } from '@react-navigation/native';
import { View, Text, Heading, HStack, Pressable, Divider } from 'native-base';
import React, { useState } from 'react';

type Props = {
	// eslint-disable-next-line no-unused-vars
	jumpTo: (key: string) => void;
};

function Step2({ jumpTo }: Props) {
	const navigation = useNavigation();
	const [travelEvents, setTravelEvents] = useState([]);
	const [accommodations, setAccommodations] = useState([]);
	return (
		<View flex={1} px={10}>
			<HStack alignItems="center">
				<Heading> Travel</Heading>
				<Pressable onPress={() => navigation.navigate('NewTravelModal')}>
					<Text>Add Travel</Text>
				</Pressable>
			</HStack>
			<Divider />
			<HStack alignItems="center">
				<Heading> Accommodation</Heading>
				<Pressable onPress={() => navigation.navigate('NewAccommodationModal')}>
					<Text>Add Accommodation</Text>
				</Pressable>
			</HStack>
			<Divider />
		</View>
	);
}

export default Step2;
