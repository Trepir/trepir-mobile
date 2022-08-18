import React from 'react';
import { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { Box, Pressable } from 'native-base';
import AccommodationCard from '../createTrip/AccommodationCard';
import { NewAccommodationState } from '../../features/newAccommodation/newAccommodationSlice';
import { DayAct } from '../../screens/ModifyTrip';

function RenderItem({ item, drag, isActive }: RenderItemParams<DayAct>) {
	return (
		<ScaleDecorator>
			<Pressable
				onLongPress={drag}
				disabled={isActive}
				height="180"
				alignItems="center"
				justifyContent="center"
			>
				{/* Need to change this */}
				{/* <AccommodationCard accommodation={item} /> */}

				{item.accommodationId !== null && <Box height="90%" width="100%" bgColor="amber.200" />}
				{item.dayActivityId !== null && <Box height="90%" width="100%" bgColor="blue.200" />}
				{item.travelEventId !== null && <Box height="90%" width="100%" bgColor="red.200" />}
			</Pressable>
		</ScaleDecorator>
	);
}

export default RenderItem;
