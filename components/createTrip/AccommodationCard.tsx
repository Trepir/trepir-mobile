import { Text, Box, HStack, VStack } from 'native-base';
import React from 'react';
import AccommodationIcon from '../../assets/icons/AccommodationIcon';
import { NewAccommodationState } from '../../features/newAccommodation/newAccommodationSlice';

type Props = {
	accommodation: NewAccommodationState; // Change tp type if needed
};

function AccommodationCard({ accommodation }: Props) {
	const { startDate, endDate, location } = accommodation;

	const parsedStartDate = new Date(startDate).toISOString().split('T')[0].replaceAll('-', '/');
	const parsedEndDate = new Date(endDate).toISOString().split('T')[0].replaceAll('-', '/');
	return (
		<HStack height="5/6" width="72" bgColor="white" mr={4} rounded="md">
			<Box
				width="2/5"
				height="90%"
				bgColor="gray.100"
				alignItems="center"
				justifyContent="center"
				alignSelf="center"
				ml={2}
				rounded="xl"
			>
				<AccommodationIcon size="80%" color="#c1c1c1" />
			</Box>
			<VStack pl={3} py={6} justifyContent="space-evenly">
				<Text fontWeight="semibold" fontSize="md">
					{location.locationName}
				</Text>
				<Text maxWidth="32" fontWeight="semibold" fontSize="md" isTruncated>
					{location.city}
				</Text>
				<Text alignSelf="center" fontSize="xs">
					{parsedStartDate}-{parsedEndDate}
				</Text>
			</VStack>
		</HStack>
	);
}

export default AccommodationCard;
