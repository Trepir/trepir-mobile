import { View, Text, ScrollView, Image } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';
import { ActivityEvent } from '../../types';
import ImagePlaceholder from '../ImagePlaceholder';
import TagArray from '../ui/TagArray';

type Props = {
	event: ActivityEvent;
};

function EventActivityInfo({ event }: Props) {
	return (
		<ScrollView flex={1} width="100%" bgColor="transparent" px="10%">
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl" pt={3}>
				Title:
			</Text>
			<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
				{event.name}
			</Text>
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
				Description:
			</Text>
			<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
				{event.description}
			</Text>
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
				Address:
			</Text>
			<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
				{event.location.formattedAddress}
			</Text>
			{event.time && (
				<View>
					<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
						Starts at:
					</Text>
					<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
						{event.time}
					</Text>
				</View>
			)}
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
				Duration:
			</Text>
			<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
				{Math.floor(event.duration / 60)}:
				{event.duration % 60 < 9 ? `0${event.duration % 60}` : event.duration % 60}h
			</Text>
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
				Tags:
			</Text>
			<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
				<TagArray tags={event.tags} />
			</Text>
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
				Image of the place:
			</Text>
			<View width="100%" height={200} mt={3} mb={12}>
				<Image
					source={{
						uri: event.location.photoUrl[0],
					}}
					fallbackElement={<ImagePlaceholder />}
					style={{
						width: '100%',
						height: '100%',
						borderRadius: 12,
						borderColor: Colors.primary.dark,
						borderWidth: 2,
					}}
					alt="image"
				/>
			</View>
		</ScrollView>
	);
}

export default EventActivityInfo;
