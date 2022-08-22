import React from 'react';
import { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { Pressable } from 'native-base';
import AccommodationCard from '../createTrip/AccommodationCard';
import { DayAct } from '../../screens/ModifyTrip';
import ActivityCard from '../ui/ActivityCard';
import TravelCard from '../createTrip/TravelCard';
import ModifyAccomCard from './ModifyAccomCard';

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
				{item.accommodation !== null && <ModifyAccomCard accommodation={item.accommodation!} />}
				{item.dayActivity !== null && <ActivityCard activity={item.dayActivity?.activity!} />}
				{item.travelEvent !== null && <TravelCard isModify travel={item.travelEvent!} />}
			</Pressable>
		</ScaleDecorator>
	);
}

export default RenderItem;
