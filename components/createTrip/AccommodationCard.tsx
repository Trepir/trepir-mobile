/* eslint-disable react/require-default-props */
import { Text, Box, HStack, VStack } from 'native-base';
import React from 'react';
import AccommodationIcon from '../../assets/icons/AccommodationIcon';
import Colors from '../../constants/Colors';
import { AccommodationEvent } from '../../types';

type Props = {
	accommodation: AccommodationEvent;
	isInTripView?: boolean;
	isCheckIn?: boolean;
};

function AccommodationCard({ accommodation, isInTripView = false, isCheckIn = false }: Props) {
	const { date, location } = accommodation;
	const parseCheckDate = () => {
		if (isInTripView) return date.split('T')[1].slice(0, 5);
		return date.split('T')[0];
	};

	return (
		<HStack width="80%" bgColor={Colors.white} borderRadius={18} p={2} shadow={1}>
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
					bgColor={Colors.black}
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
					<Text alignSelf="center" bgColor={Colors.grey.dark} fontSize="xs">
						{isCheckIn ? 'CheckIn at: ' : 'Checkout at: '}
						{parseCheckDate()}
					</Text>
				</VStack>
			</VStack>
		</HStack>
	);
}

export default AccommodationCard;
