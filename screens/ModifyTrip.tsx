import { View, Pressable, Heading } from 'native-base';
import React, { useState } from 'react';
import {
	NestableScrollContainer,
	NestableDraggableFlatList,
	RenderItemParams,
	ScaleDecorator,
} from 'react-native-draggable-flatlist';
import AccommodationCard from '../components/createTrip/AccommodationCard';
import { NewAccommodationState } from '../features/newAccommodation/newAccommodationSlice';
// import { TripStackScreenProps } from '../types';

function ModifyTrip() {
	const [data1, setData1] = useState<NewAccommodationState[]>([
		{
			uid: '1',
			location: {
				latitude: 12.13,
				longitude: 234,
				country: 'Mexico',
				state: 'Mexico',
				locationName: 'Hotel 1',
				city: 'Merida',
				googleId: '12sae3w',
			},
			startDate: new Date('2022-07-10').getTime(),
			endDate: new Date('2022-07-12').getTime(),
		},
		{
			uid: '1',
			location: {
				latitude: 12.13,
				longitude: 234,
				country: 'Mexico',
				state: 'Mexico',
				locationName: 'Hotel 2',
				city: 'Merida',
				googleId: '12sae3w',
			},
			startDate: new Date('2022-07-10').getTime(),
			endDate: new Date('2022-07-12').getTime(),
		},
		{
			uid: '1',
			location: {
				latitude: 12.13,
				longitude: 234,
				country: 'Mexico',
				state: 'Mexico',
				locationName: 'Hotel 3',
				city: 'Merida',
				googleId: '12sae3w',
			},
			startDate: new Date('2022-07-10').getTime(),
			endDate: new Date('2022-07-12').getTime(),
		},
	]);
	const [data2, setData2] = useState<NewAccommodationState[]>([
		{
			uid: '1',
			location: {
				latitude: 12.13,
				longitude: 234,
				country: 'Mexico',
				state: 'Mexico',
				locationName: 'Hotel 1',
				city: 'Merida',
				googleId: '12sae3w',
			},
			startDate: new Date('2022-07-10').getTime(),
			endDate: new Date('2022-07-12').getTime(),
		},
		{
			uid: '1',
			location: {
				latitude: 12.13,
				longitude: 234,
				country: 'Mexico',
				state: 'Mexico',
				locationName: 'Hotel 2',
				city: 'Merida',
				googleId: '12sae3w',
			},
			startDate: new Date('2022-07-10').getTime(),
			endDate: new Date('2022-07-12').getTime(),
		},
		{
			uid: '1',
			location: {
				latitude: 12.13,
				longitude: 234,
				country: 'Mexico',
				state: 'Mexico',
				locationName: 'Hotel 3',
				city: 'Merida',
				googleId: '12sae3w',
			},
			startDate: new Date('2022-07-10').getTime(),
			endDate: new Date('2022-07-12').getTime(),
		},
	]);

	const renderItem = ({ item, drag, isActive }: RenderItemParams<NewAccommodationState>) => (
		<ScaleDecorator>
			<Pressable
				// activeOpacity={1}
				onLongPress={drag}
				disabled={isActive}
			>
				<AccommodationCard accommodation={item} />
			</Pressable>
		</ScaleDecorator>
	);

	return (
		<View flex={1} pt={4}>
			<Heading alignSelf="center" fontWeight="semibold">
				Edit your Itinerary
			</Heading>

			<NestableScrollContainer>
				<Heading alignSelf="center" fontWeight="semibold">
					Day 1
				</Heading>
				<NestableDraggableFlatList
					data={data1}
					renderItem={renderItem}
					keyExtractor={(item) => item.location.locationName}
					onDragEnd={({ data }) => setData1(data)}
				/>
				<Heading alignSelf="center" fontWeight="semibold">
					Day 2
				</Heading>
				<NestableDraggableFlatList
					data={data2}
					renderItem={renderItem}
					keyExtractor={(item) => item.location.locationName}
					onDragEnd={({ data }) => setData2(data)}
				/>
			</NestableScrollContainer>
		</View>
	);
}

export default ModifyTrip;
