import { View, Text, ScrollView, Image } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';
import { TravelEvent } from '../../types';
import ImagePlaceholder from '../ImagePlaceholder';
import MapViewActivity from './MapViewActivity';

type Props = {
	event: TravelEvent;
};

function EventTravelInfo({ event }: Props) {
	return (
		<ScrollView flex={1} width="100%" bgColor="transparent">
			<View width="100%" mb={0}>
				<MapViewActivity
					actLatitude={event.originLocation.latitude}
					actLongitude={event.originLocation.longitude}
					extraLatitude={event.destinationLocation.latitude}
					extraLongitude={event.destinationLocation.longitude}
				/>
			</View>
			<View px="10%" py={3}>
				<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl" pt={3}>
					Departure:
				</Text>
				<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
					{event.originLocation.locationName}
				</Text>
				<View pl={4}>
					<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="xl">
						Address:
					</Text>
					<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
						{event.originLocation.formattedAddress}
					</Text>
					<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="xl">
						Departure time:
					</Text>
					<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
						{event.departure.split('T')[1].slice(0, 5)}h
					</Text>
				</View>

				<View width="100%" height={200} mb={2}>
					<Image
						source={{ uri: event.originLocation.photoUrl[0] }}
						fallbackElement={<ImagePlaceholder />}
						style={{
							width: '100%',
							height: '100%',
							borderRadius: 12,
						}}
						alt="image"
					/>
				</View>
				<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl" pt={3}>
					Arrival:
				</Text>
				<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
					{event.destinationLocation.locationName}
				</Text>
				<View pl={4}>
					<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="xl">
						Address:
					</Text>
					<Text color={Colors.grey.dark} fontSize="lg" mb={4}>
						{event.destinationLocation.formattedAddress}
					</Text>
				</View>
				{event.type === 'Flight' && event.travelInfo && (
					<View>
						<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
							Flight number:
						</Text>
						<Text color={Colors.grey.dark} fontSize="xl" mb={4}>
							{event.travelInfo}
						</Text>
					</View>
				)}
				<View
					width="100%"
					height={200}
					mb={12}
					borderRadius={12}
					bgColor={Colors.grey.extraLight}
					alignContent="center"
					alignItems="center"
				>
					<Image
						source={{ uri: event.destinationLocation.photoUrl[0] }}
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
export default EventTravelInfo;
