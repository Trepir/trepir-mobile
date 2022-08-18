import { View, Text, Box, HStack, VStack, Divider, Image } from 'native-base';
import React from 'react';
import ConditionalTravelIcon from '../../assets/icons/ConditionalTravelIcon';
import GoogleIcon from '../../assets/icons/GoogleIcon';
import Colors from '../../constants/Colors';
import { NewTravelState } from '../../features/newTravel/newTravelSlice';
import { Activity } from '../../types';

type Props = {
	activity: Activity;
};

function ActivityCard({ activity }: Props) {
	const { id, name, duration, description, time, rating, tags, imageUrl, locationId } = activity;
	return (
		<HStack width="72" bgColor="white" mr={4} borderRadius={12}>
			<Box
				width="2/5"
				bgColor="gray.100"
				alignItems="center"
				justifyContent="center"
				m={2}
				borderRadius={12}
			>
				<Image
					source={{
						uri: imageUrl,
					}}
					alt="activity image"
					width={150}
					height={150}
					borderRadius={12}
				/>
			</Box>

			<VStack px={3} justifyContent="space-around" alignSelf="center">
				<VStack justifyContent="center" alignItems="center">
					<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated noOfLines={2} mb={1}>
						{name}
					</Text>
					<Divider mb={1} />
					<Text fontWeight="semibold" fontSize="md" maxWidth="32" isTruncated>
						{description}
					</Text>
				</VStack>
				<Text alignSelf="center">{id}</Text>
			</VStack>
		</HStack>
	);
}

export default ActivityCard;
