import { View, Text, Box, HStack, VStack } from 'native-base';
import React from 'react';
import GoogleIcon from '../../assets/icons/GoogleIcon';
import { NewTravelState } from '../../features/newTravel/newTravelSlice';

type Props = {
	travel: NewTravelState; //Change tp type if needed
};

function TravelCard({ travel }: Props) {
	const { type, origin, destination, departure } = travel;
	const parsedDate = new Date(departure).toISOString().split('T')[0];
	return (
		<HStack height="5/6" width="72" bgColor="blue.300" mr={4} rounded="md">
			<Box
				width="2/5"
				height="full"
				bgColor="amber.300"
				alignItems="center"
				justifyContent="center"
			>
				<GoogleIcon size="80%" />
			</Box>
			<VStack pl={4} py={6} justifyContent="space-evenly">
				<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated>
					{origin.locationName}
				</Text>
				<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated>
					{destination.locationName}
				</Text>
				<Text alignSelf="center">{parsedDate} </Text>
			</VStack>
		</HStack>
	);
}

export default TravelCard;
