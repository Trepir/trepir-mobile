import { Text, Box, HStack, VStack, Image } from 'native-base';
import React from 'react';
import { Activity } from '../../types';

type Props = {
	activity: Activity;
};

function ActivityCard({ activity }: Props) {
	const { id, name, duration, description, time, rating, tags, imageUrl, location } = activity;
	return (
		<HStack width="80%" bgColor="white" borderRadius={18}>
			<Box
				width={120}
				height={120}
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
					width={120}
					height={120}
					borderRadius={12}
				/>
			</Box>

			<VStack px={3} justifyContent="space-around">
				<VStack>
					<Text fontWeight="semibold" fontSize="lg" maxWidth="48" isTruncated noOfLines={2} mb={1}>
						{name}
					</Text>

					{/* <Text fontWeight="normal" fontSize="md" maxWidth="32" isTruncated>
						{description}
					</Text> */}
				</VStack>
				<Text fontSize="md">{location.city}</Text>
			</VStack>
		</HStack>
	);
}

export default ActivityCard;
