import { View, Heading, Pressable, HStack, Divider } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {
	NestableScrollContainer,
	NestableDraggableFlatList,
} from 'react-native-draggable-flatlist';
import RenderItem from '../components/modifyTrip/RenderItem';
import {
	clearAccommodationState,
	NewAccommodationState,
} from '../features/newAccommodation/newAccommodationSlice';
import PickEventBS from '../components/modifyTrip/PickEventBS';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearTravelState } from '../features/newTravel/newTravelSlice';
import { clearActivityState } from '../features/newActivity/newActivitySlice';
import GoogleIcon from '../assets/icons/GoogleIcon';

type TripDays = {
	id: string;
	dayIndex: number;
	tripId: string;
	tripDayActivities: any[];
};
export type DayAct = {
	id: string;
	tripDayId: string;
	order: number;
	dayActivityId?: string;
	accommodationId?: string;
	travelEventId?: string;
};

function ModifyTrip() {
	const [tripDays, setTripDays] = useState<TripDays[]>([
		{
			id: 'cl6z1r1wk00345y0g7mcdmzwj',
			dayIndex: 0,
			tripId: 'cl6z1r1wk00335y0gexv91hgv',
			tripDayActivities: [
				{
					id: 'cl6z69iq300344dbs3q75b9ft1',
					tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
					order: 0,
					dayActivityId: 'cl6z69iq300354dbsso8a6nmx',
					accommodationId: null,
					travelEventId: null,
				},
				{
					id: 'cl6z69iq300344dbs3q75b9ft2',
					tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
					order: 0,
					dayActivityId: null,
					accommodationId: 'cl6z69iq300354dbsso8a6nmx',
					travelEventId: null,
				},
			],
		},
		{
			id: 'cl6z1r1wk00355y0ge14khmxx',
			dayIndex: 1,
			tripId: 'cl6z1r1wk00335y0gexv91hgv',
			tripDayActivities: [
				{
					id: 'cl6z69iq300344dbs3q75b9ft3',
					tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
					order: 0,
					dayActivityId: 'cl6z69iq300354dbsso8a6nmx',
					accommodationId: null,
					travelEventId: null,
				},
				{
					id: 'cl6z69iq300344dbs3q75b9ft4',
					tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
					order: 0,
					dayActivityId: null,
					accommodationId: 'cl6z69iq300354dbsso8a6nmx',
					travelEventId: null,
				},
				{
					id: 'cl6z69iq300344dbs3q75b9ft5',
					tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
					order: 0,
					dayActivityId: null,
					accommodationId: null,
					travelEventId: 'cl6z69iq300354dbsso8a6nmx',
				},
				{
					id: 'cl6z69iq300344dbs3q75b9ft6',
					tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
					order: 0,
					dayActivityId: null,
					accommodationId: 'cl6z69iq300354dbsso8a6nmx',
					travelEventId: null,
				},
			],
		},
	]);

	const dispatch = useAppDispatch();
	const newlyAddedActivity = useAppSelector((state) => state.newActivity);
	const newlyAddedAccommodation = useAppSelector((state) => state.newAccommodation);
	const newlyAddedTravel = useAppSelector((state) => state.newTravel);

	useEffect(() => {
		if (newlyAddedActivity.uid !== '') {
			console.log('NEW ACTIVITY ==================>', newlyAddedActivity);
			dispatch(clearActivityState());
		}
	}, [newlyAddedActivity]);
	useEffect(() => {
		if (newlyAddedAccommodation.uid !== '') {
			console.log('NEW ACCOMMODATION ===================>', newlyAddedAccommodation);
			dispatch(clearAccommodationState());
		}
	}, [newlyAddedAccommodation]);
	useEffect(() => {
		if (newlyAddedTravel.uid !== '') {
			console.log('NEW TRAVEL ==================>', newlyAddedTravel);
			dispatch(clearTravelState());
		}
	}, [newlyAddedTravel]);

	const bottomSheetRef = useRef<BottomSheet>(null);

	return (
		<View flex={1} pt={4}>
			<Pressable
				onPress={() => {
					bottomSheetRef.current?.expand();
				}}
			>
				<Heading alignSelf="center" fontWeight="semibold">
					Edit your Itinerary
				</Heading>
			</Pressable>
			<NestableScrollContainer style={{ height: '100%' }}>
				{tripDays.map((tripDay) => (
					<View key={tripDay.id}>
						<HStack alignItems="center" justifyContent="center">
							<Heading alignSelf="center" fontWeight="semibold">
								Day {tripDay.dayIndex}
							</Heading>
							<Divider width="50%" mx="5" />
							<GoogleIcon size={30} />
						</HStack>
						<NestableDraggableFlatList
							data={tripDay.tripDayActivities}
							renderItem={RenderItem}
							keyExtractor={(item: DayAct) => item.id} // Change this
							onDragEnd={({ data }) => {
								setTripDays((prev) => {
									const newState: any[] = [];
									prev.forEach((_, index) => {
										console.log('INSIDE');
										if (tripDay.dayIndex === index) {
											newState.push({
												id: prev[index].id,
												dayIndex: prev[index].dayIndex,
												tripId: prev[index].tripId,
												tripDayActivities: data,
											});
										} else {
											newState.push(prev[index]);
										}
									});
									return newState;
								});
							}}
						/>
					</View>
				))}
			</NestableScrollContainer>
			<PickEventBS bottomSheetRef={bottomSheetRef} />
		</View>
	);
}

export default ModifyTrip;
