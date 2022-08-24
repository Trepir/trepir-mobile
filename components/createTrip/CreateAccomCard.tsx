import { Text, Box, HStack, VStack } from 'native-base';
import React from 'react';
import AccommodationIcon from '../../assets/icons/AccommodationIcon';
import Arrow from '../../assets/icons/Arrow';
import Colors from '../../constants/Colors';
import { AccommodationState } from '../../types';

type Props = {
	accommodation: AccommodationState; // Change tp type if needed
};

function CreateAccomCard({ accommodation }: Props) {
	const { startDate, endDate, location } = accommodation;

	const parsedStartDate = startDate.split('T')[0].slice(0, 10);
	const parsedEndDate = endDate.split('T')[0].slice(0, 10);

	return (
		<HStack width="100%" bgColor={Colors.white} borderRadius={18} p={2} shadow={1}>
			<Box
				width={120}
				height={120}
				bgColor={Colors.primary.softIconBackground}
				alignItems="center"
				justifyContent="center"
				borderRadius={12}
			>
				<AccommodationIcon size="80%" color={Colors.primary.softIcon} />
			</Box>

			<VStack pl={3} justifyContent="space-around" width="58%">
				<Text
					fontWeight="semibold"
					textAlign="center"
					fontSize="md"
					bgColor={Colors.grey.light}
					isTruncated
					noOfLines={2}
					mb={1}
				>
					{location.locationName}
				</Text>
				<VStack width="100%">
					<Text
						fontWeight="semibold"
						textAlign="center"
						fontSize="md"
						bgColor={Colors.black}
						isTruncated
						noOfLines={2}
						mb={1}
					>
						{location.city}
					</Text>
					<HStack alignSelf="center" alignItems="center">
						<Text>{parsedStartDate} </Text>
						<Arrow size={5} color={Colors.primary.normal} />
						<Text> {parsedEndDate}</Text>
					</HStack>
				</VStack>
			</VStack>
		</HStack>
	);
}

export default CreateAccomCard;
