import { Text, Box, HStack, VStack } from 'native-base';
import React from 'react';
import GoogleIcon from '../../assets/icons/GoogleIcon';
import { NewAccommodationState } from '../../features/newAccommodation/newAccommodationSlice';

type Props = {
	accommodation: NewAccommodationState; // Change tp type if needed
};

function AccommodationCard({ accommodation }: Props) {
	const { startDate, endDate, location } = accommodation;

	const parsedStartDate = new Date(startDate).toISOString().split('T')[0];
	const parsedEndDate = new Date(endDate).toISOString().split('T')[0];
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
				<Text fontWeight="semibold" fontSize="md">
					{location.locationName}
				</Text>
				<Text maxWidth="32" fontWeight="semibold" fontSize="md" isTruncated>
					{location.city}
				</Text>
				<Text alignSelf="center">
					{parsedStartDate}-{parsedEndDate}
				</Text>
			</VStack>
		</HStack>
	);
}

export default AccommodationCard;
