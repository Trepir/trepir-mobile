import React from 'react';
import { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { Box, Pressable } from 'native-base';
import AccommodationCard from '../createTrip/AccommodationCard';
import ActivityCard from '../ui/ActivityCard';
import TravelCard from '../createTrip/TravelCard';
import { DayAct } from '../../types';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import Colors from '../../constants/Colors';

type Props = {
	renderItemParams: RenderItemParams<DayAct>;
	// eslint-disable-next-line no-unused-vars
	deleteTripEvent: (tripDayActivityId: string) => void;
};

function RenderItem({ renderItemParams, deleteTripEvent }: Props) {
	const { item, drag, isActive } = renderItemParams;
	return (
		<ScaleDecorator>
			<Pressable
				onLongPress={drag}
				disabled={isActive}
				height="180"
				alignItems="center"
				justifyContent="center"
				position="relative"
			>
				{item.accommodation === null && (
					<Pressable
						position="absolute"
						top={5}
						right={70}
						zIndex={1}
						onPress={() => deleteTripEvent(item.id)}
					>
						<DeleteIcon size={30} color={Colors.secondary.normal} />
					</Pressable>
				)}
				{item.accommodation !== null && <AccommodationCard accommodation={item.accommodation!} />}
				{item.dayActivity !== null && <ActivityCard activity={item.dayActivity?.activity!} />}
				{item.travelEvent !== null && <TravelCard isModify travel={item.travelEvent!} />}
			</Pressable>
		</ScaleDecorator>
	);
}

export default RenderItem;
