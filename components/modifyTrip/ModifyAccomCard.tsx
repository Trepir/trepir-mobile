import { Text, Box, HStack, VStack } from 'native-base';
import React from 'react';
import AccommodationIcon from '../../assets/icons/AccommodationIcon';
import { AccommodationEvent } from '../../types';

type Props = {
	accommodation: AccommodationEvent; // Change tp type if needed
};

function ModifyAccomCard({ accommodation }: Props) {
	const { date, location } = accommodation;

	const parsedDate = date.split('T')[0];

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
				<Text alignSelf="center" fontSize="xs">
					{parsedDate}
				</Text>
			</VStack>
		</HStack>
	);
}

export default ModifyAccomCard;
