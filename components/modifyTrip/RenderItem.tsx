import React from 'react';
import { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { Divider, Heading, HStack, Pressable } from 'native-base';
import AccommodationCard from '../createTrip/AccommodationCard';
import ActivityCard from '../ui/ActivityCard';
import TravelCard from '../createTrip/TravelCard';
import { DayAct } from '../../types';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import Colors from '../../constants/Colors';
import AddIcon from '../../assets/icons/AddIcon';
import { getDate } from '../../helpers/getDateOfTripDay';
import { useAppSelector } from '../../app/hooks';

type Props = {
	renderItemParams: RenderItemParams<DayAct & { dayIndex: number; id: string; tripId: string }>;
	// eslint-disable-next-line no-unused-vars
	deleteTripEvent: (tripDayActivityId: string) => void;
	// eslint-disable-next-line no-unused-vars
	addEventToDay: (day: number) => void;
};

function RenderItem({ renderItemParams, deleteTripEvent, addEventToDay }: Props) {
	const { item, drag, isActive } = renderItemParams;
	const { startDate } = useAppSelector((state) => state.currentTrip);
	return (
		<ScaleDecorator>
			{item.dayIndex === undefined ? (
				<Pressable
					onLongPress={drag}
					disabled={isActive}
					height="40"
					alignItems="center"
					justifyContent="center"
					position="relative"
				>
					<Pressable
						position="absolute"
						top={6}
						left={53}
						zIndex={1}
						onPress={() => deleteTripEvent(item.id)}
						rounded="full"
						bgColor="white"
					>
						<DeleteIcon size={30} color="red" />
					</Pressable>
					{item.accommodation !== null && <AccommodationCard accommodation={item.accommodation!} />}
					{item.dayActivity !== null && <ActivityCard activity={item.dayActivity?.activity!} />}
					{item.travelEvent !== null && <TravelCard isInTripView travel={item.travelEvent!} />}
				</Pressable>
			) : (
				<Pressable onPress={() => addEventToDay(item.dayIndex)} px="16">
					<HStack alignItems="center" justifyContent="center">
						<Heading alignSelf="center" fontWeight="semibold">
							{getDate(startDate, item.dayIndex)}
						</Heading>
						<Divider width="50%" mx="5" />
						<AddIcon size={35} color="#0f0f0f" />
					</HStack>
				</Pressable>
			)}
		</ScaleDecorator>
	);
}

export default RenderItem;
