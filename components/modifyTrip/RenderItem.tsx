import React from 'react';
import { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { Pressable } from 'native-base';
import AccommodationCard from '../createTrip/AccommodationCard';
import { DayAct } from '../../screens/ModifyTrip';
import ActivityCard from '../ui/ActivityCard';
import TravelCard from '../createTrip/TravelCard';

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
				{item.accommodationId !== null && <AccommodationCard accommodation={item.accommodation!} />}
				{item.dayActivityId !== null && <ActivityCard activity={item.dayActivity?.activity!} />}
				{item.travelEventId !== null && <TravelCard travel={item.travel!} />}
			</Pressable>
		</ScaleDecorator>
	);
}

export default RenderItem;
