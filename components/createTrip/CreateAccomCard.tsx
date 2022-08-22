import { Text, Box, HStack, VStack } from 'native-base';
import React from 'react';
import AccommodationIcon from '../../assets/icons/AccommodationIcon';
import { AccommodationState } from '../../types';

type Props = {
	accommodation: AccommodationState; // Change tp type if needed
};

function CreateAccomCard({ accommodation }: Props) {
	const { startDate, endDate, location } = accommodation;

	return (
		<HStack height="5/6" width="72" bgColor="white" rounded="md">
			<Box
				width="2/5"
				height="90%"
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
				<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated>
					{location.locationName}
				</Text>
				<Text maxWidth="32" fontWeight="semibold" fontSize="md" isTruncated>
					{location.city}
				</Text>
				<Text alignSelf="center" fontSize="2xs" fontWeight="medium">
					{`${startDate}=>${endDate}`}
				</Text>
			</VStack>
		</HStack>
	);
}

export default CreateAccomCard;
