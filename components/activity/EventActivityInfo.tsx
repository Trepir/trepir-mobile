import { View, Text, ScrollView, Image } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';
import { ActivityEvent } from '../../types';
import ImagePlaceholder from '../ImagePlaceholder';
import TagArray from '../ui/TagArray';
import MapViewActivity from './MapViewActivity';

type Props = {
	event: ActivityEvent;
};

function EventActivityInfo({ event }: Props) {
	return (
		<ScrollView flex={1} width="100%" bgColor="transparent">
			<View width="100%" mb={0}>
				<MapViewActivity
					actLatitude={event.location.latitude}
					actLongitude={event.location.longitude}
				/>
			</View>
			<View px="10%" pb={8} pt={5}>
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
				<View width="100%" height={200} mt={3} mb={6}>
					<Image
						source={{ uri: event.location.photoUrl[0] }}
						fallbackElement={<ImagePlaceholder />}
						style={{
							width: '100%',
							height: '100%',
							borderRadius: 12,
						}}
						alt="image"
					/>
				</View>
			</View>
		</ScrollView>
	);
}

export default EventActivityInfo;
