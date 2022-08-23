import { Text, Box, HStack, VStack, View } from 'native-base';
import React from 'react';
import Arrow from '../../assets/icons/Arrow';
import ConditionalTravelIcon from '../../assets/icons/ConditionalTravelIcon';
import Colors from '../../constants/Colors';
import { TravelEvent, TravelState } from '../../types';

type Props = {
	travel: TravelEvent | TravelState;
	// eslint-disable-next-line react/require-default-props
	isInTripView?: boolean;
};

function TravelCard({ travel, isInTripView = false }: Props) {
	const { type, originLocation, destinationLocation, departure } = travel;
	const parseDepartureDate = () => {
		if (isInTripView) return departure.split('T')[1].slice(0, 5);
		return departure.split('T')[0];
	};

	return (
		<HStack
			width={isInTripView ? '85%' : '100%'}
			bgColor={Colors.white}
			borderRadius={18}
			p={2}
			shadow={1}
		>
			<Box
				width={120}
				height={120}
				bgColor={Colors.primary.softIconBackground}
				alignItems="center"
				justifyContent="center"
				borderRadius={12}
			>
				<ConditionalTravelIcon type={type} size="80%" color={Colors.primary.softIcon} />
			</Box>

			<VStack pl={3} justifyContent="space-around" width="58%">
				<VStack width="100%">
					<Text
						fontWeight="semibold"
						textAlign="center"
						fontSize="md"
						bgColor={Colors.black}
						isTruncated
						noOfLines={1}
						mb={1}
					>
						{originLocation.locationName}
					</Text>
					<View alignSelf="center" style={{ transform: [{ rotate: '90deg' }] }}>
						<Arrow size={8} color={Colors.primary.normal} />
					</View>
					<Text
						fontWeight="semibold"
						textAlign="center"
						fontSize="md"
						bgColor={Colors.black}
						isTruncated
						noOfLines={2}
						mb={1}
					>
						{destinationLocation.locationName}
					</Text>
				</VStack>
				<Text alignSelf="center" bgColor={Colors.grey.dark}>
					Departure: {parseDepartureDate()}
				</Text>
			</VStack>
		</HStack>
	);
}

export default TravelCard;
