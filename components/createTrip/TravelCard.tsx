import { Text, Box, HStack, VStack, Divider } from 'native-base';
import React from 'react';
import ConditionalTravelIcon from '../../assets/icons/ConditionalTravelIcon';
import { NewTravelState } from '../../features/newTravel/newTravelSlice';

type Props = {
	// travel: NewTravelState; // Change tp type if needed
	travel: any; // Change tp type if needed
	isModify: boolean;
};

function TravelCard({ travel, isModify = false }: Props) {
	const { travelType, departure } = travel;

	const parseTravelDate = () =>
		isModify ? departure.split('T')[0] : new Date(departure).toISOString().split('T')[0];

	return (
		<HStack height="5/6" width="72" bgColor="white" borderRadius={12}>
			<Box
				width="2/5"
				bgColor="gray.100"
				alignItems="center"
				justifyContent="center"
				m={2}
				borderRadius={12}
			>
				<ConditionalTravelIcon type={travelType} size="80%" color="#c1c1c1" />
			</Box>

			<VStack px={3} justifyContent="space-around" alignSelf="center">
				<VStack justifyContent="center" alignItems="center">
					<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated noOfLines={2} mb={1}>
						{isModify ? travel.originLocation.locationName : travel.origin.locationName}
					</Text>
					<Divider mb={1} />
					<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated>
						{isModify ? travel.destinationLocation.locationName : travel.destination.locationName}
					</Text>
				</VStack>
				<Text alignSelf="center"> {parseTravelDate()} </Text>
			</VStack>
		</HStack>
	);
}

export default TravelCard;
