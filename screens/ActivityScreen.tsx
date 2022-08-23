import { View, Text, ScrollView, Image } from 'native-base';
import React from 'react';
// import { StyleSheet } from 'react-native';
import { useAppSelector } from '../app/hooks';
import TopViewActivity from '../components/activity/TopViewActivity';
import ImagePlaceholder from '../components/ImagePlaceholder';
import TagArray from '../components/ui/TagArray';
import Colors from '../constants/Colors';
import { DayAct } from '../types';

// const styles = StyleSheet.create({
// 	title: {
// 		fontWeight: '600',
// 		fontSize: 24,
// 		color: Colors.primary.dark,
// 	},
// 	text: {
// 		fontSize: 18,
// 		color: Colors.black,
// 		marginBottom: 10,
// 	},
// });

function filterActivity(dayAct: DayAct) {
	console.log('filterActivity', dayAct);
	if (dayAct.dayActivity?.activity) {
		const event = dayAct.dayActivity.activity;
		return (
			<View
				flex={1}
				width="100%"
				alignItems="center"
				justifyContent="flex-start"
				bgColor={Colors.grey.extraLight}
			>
				<TopViewActivity title="Activity details" />
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
							}}
							alt="image"
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
	if (dayAct.accommodation) {
		const event = dayAct.accommodation;
		return (
			<View
				flex={1}
				width="100%"
				alignItems="center"
				justifyContent="flex-start"
				bgColor={Colors.grey.extraLight}
			>
				<TopViewActivity title="Accommodation details" />
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
							}}
							alt="image"
						/>
					</View>
				</ScrollView>
			</View>
		);
	}

	if (dayAct.travelEvent) {
		const event = dayAct.travelEvent;
		return (
			<View
				flex={1}
				width="100%"
				alignItems="center"
				justifyContent="flex-start"
				bgColor={Colors.grey.extraLight}
			>
				<TopViewActivity title="Travel details" />
				<ScrollView flex={1} width="100%" bgColor="transparent" px="10%" py={3}>
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
					<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
						Image of the place of departure:
					</Text>
					<View width="100%" height={200} mt={3} mb={2}>
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
					<Text color={Colors.primary.dark} fontWeight="semibold" fontSize="2xl">
						Image of the place of arrival:
					</Text>
					<View
						width="100%"
						height={200}
						mt={3}
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
				</ScrollView>
			</View>
		);
	}
	return <View />;
}

function ActivityScreen() {
	const wholeDay = useAppSelector((state) => state.currentActivity);
	return filterActivity(wholeDay);
}

export default ActivityScreen;
