import { useNavigation } from '@react-navigation/native';
import { Text, HStack, Pressable } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';

function ButtonGroup() {
	const navigation = useNavigation();

	return (
		<HStack>
			<Pressable
				w="28%"
				alignItems="center"
				bgColor={Colors.primary.normal}
				onPress={() => navigation.navigate('NewAccommodationModal')}
				borderLeftRadius="lg"
			>
				<Text fontSize="md" fontWeight="medium" py={4} color="white">
					Add Stay
				</Text>
			</Pressable>
			<Pressable
				w="28%"
				alignItems="center"
				bgColor={Colors.primary.normal}
				onPress={() => navigation.navigate('NewTravelModal')}
				borderColor="white"
				borderRightWidth={1}
				borderLeftWidth={1}
			>
				<Text fontSize="md" fontWeight="medium" py={4} color="white">
					Add Travel
				</Text>
			</Pressable>
			<Pressable
				w="28%"
				alignItems="center"
				bgColor={Colors.primary.normal}
				onPress={() => navigation.navigate('NewActivityModal')}
				borderRightRadius="lg"
			>
				<Text fontSize="md" fontWeight="medium" py={4} color="white">
					Add Activity
				</Text>
			</Pressable>
		</HStack>
	);
}

export default ButtonGroup;
