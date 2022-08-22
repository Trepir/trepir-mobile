import { Text, Box, HStack, VStack } from 'native-base';
import React from 'react';
import AccommodationIcon from '../../assets/icons/AccommodationIcon';
import { NewAccommodationState } from '../../features/newAccommodation/newAccommodationSlice';

type Props = {
	accommodation: NewAccommodationState; // Change tp type if needed
};

function AccommodationCard({ accommodation }: Props) {
	const { date, location } = accommodation;

	const parsedStartDate = new Date(date).toISOString().split('T')[0];
	// const parsedEndDate = new Date(endDate).toISOString().split('T')[0];

	return (
		<HStack height={100} width="72" bgColor="white" rounded="md">
			<Box
				width="2/5"
				height="100%"
				bgColor="gray.100"
				alignItems="center"
				justifyContent="center"
				alignSelf="center"
				ml={2}
				borderRadius={18}
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
					{parsedStartDate}
				</Text>
			</VStack>
		</HStack>
	);
}

export default AccommodationCard;
