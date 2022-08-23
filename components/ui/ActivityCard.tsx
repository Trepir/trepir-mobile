import { Text, Box, HStack, VStack, Image } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';
import { ActivityEvent } from '../../types';
import ImagePlaceholder from '../ImagePlaceholder';
import TagArray from './TagArray';

type Props = {
	activity: ActivityEvent;
};

function ActivityCard({ activity }: Props) {
	const { name, location, tags } = activity;
	return (
		<HStack width="85%" bgColor={Colors.white} borderRadius={18} p={2} shadow={1}>
			<Box
				width={120}
				height={120}
				bgColor={Colors.grey.extraLight}
				alignItems="center"
				justifyContent="center"
				borderRadius={12}
			>
				<Image
					source={{
						uri: location.photoUrl[0],
					}}
					fallbackElement={<ImagePlaceholder />}
					alt="activity image"
					width={120}
					height={120}
					borderRadius={12}
				/>
			</Box>

			<VStack pl={3} justifyContent="space-around" width="58%">
				<VStack>
					<Text
						fontWeight="semibold"
						fontSize="lg"
						isTruncated
						noOfLines={2}
						mb={1}
						color={Colors.black}
					>
						{name}
					</Text>
				</VStack>
				<VStack>
					<Text fontSize="md" isTruncated color={Colors.black}>
						{location.city}
					</Text>
					<TagArray tags={tags} short />
				</VStack>
			</VStack>
		</HStack>
	);
}

export default ActivityCard;
