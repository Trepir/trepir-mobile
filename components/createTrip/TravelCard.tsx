import { Text, Box, HStack, VStack, Divider } from 'native-base';
import React from 'react';
import ConditionalTravelIcon from '../../assets/icons/ConditionalTravelIcon';
import { NewTravelState } from '../../features/newTravel/newTravelSlice';

type Props = {
	travel: NewTravelState; // Change tp type if needed
};

function TravelCard({ travel }: Props) {
	const { type, origin, destination, departure } = travel;
	const parsedDate = new Date(departure).toISOString().split('T')[0];
	return (
		<HStack height="5/6" width="72" bgColor="white" mr={4} borderRadius={12}>
			<Box
				width="2/5"
				bgColor="gray.100"
				alignItems="center"
				justifyContent="center"
				m={2}
				borderRadius={12}
			>
				<ConditionalTravelIcon type={type} size="80%" color="#c1c1c1" />
			</Box>

			<VStack px={3} justifyContent="space-around" alignSelf="center">
				<VStack justifyContent="center" alignItems="center">
					<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated noOfLines={2} mb={1}>
						{origin.locationName}
					</Text>
					<Divider mb={1} />
					<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated>
						{destination.locationName}
					</Text>
				</VStack>
				<Text alignSelf="center">{parsedDate} </Text>
			</VStack>
		</HStack>
	);
}

export default TravelCard;
