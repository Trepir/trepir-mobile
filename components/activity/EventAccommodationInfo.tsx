import { View, Text, ScrollView, Image } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';
import { AccommodationEvent } from '../../types';
import ImagePlaceholder from '../ImagePlaceholder';

type Props = {
	event: AccommodationEvent;
};

function EventAccommodationInfo({ event }: Props) {
	return (
		<ScrollView flex={1} width="100%" bgColor="transparent" px="10%" py={3}>
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl" pt={3}>
				Name of the establishment:
			</Text>
			<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
				{event.location.locationName}
			</Text>
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
				Address:
			</Text>
			<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
				{event.location.formattedAddress}
			</Text>
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
				Check In/Out:
			</Text>
			<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
				{event.date.split('T')[1].slice(0, 5)}h
			</Text>
			<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
				Image of the establishment:
			</Text>
			<View width="100%" height={200} mt={3} mb={12}>
				<Image
					source={{ uri: event.location.photoUrl[0] }}
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

export default EventAccommodationInfo;
