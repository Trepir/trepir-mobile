import { View, Heading, Pressable, HStack, Divider, Box } from 'native-base';
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
import { clearTravelState, NewTravelState } from '../features/newTravel/newTravelSlice';
import { clearActivityState } from '../features/newActivity/newActivitySlice';
import { Activity } from '../types';
import AddIcon from '../assets/icons/AddIcon';
import EmptyList from '../components/createTrip/EmptyList';

export type DayAct = {
	id: string;
	tripDayId: string;
	order: number;
	dayActivityId: string | null;
	accommodationId: string | null;
	travelEventId: string | null;
	accommodation: NewAccommodationState | null;
	travel: NewTravelState | null;
	dayActivity: {
		id: string;
		activity: Activity;
	} | null;
};
type TripDays = {
	id: string;
	dayIndex: number;
	tripId: string;
	tripDayActivities: DayAct[];
};

function ModifyTrip() {
	const [selectedDay, setSelectedDay] = useState<'' | number>('');
	const [tripDays, setTripDays] = useState<TripDays[]>([
		{
			id: 'cl6z1r1wk00345y0g7mcdmzwj',
			dayIndex: 0,
			tripId: 'cl6z1r1wk00335y0gexv91hgv',
			tripDayActivities: [],
		},
		{
			id: 'cl6z1r1wk00355y0ge14khmxx',
			dayIndex: 1,
			tripId: 'cl6z1r1wk00335y0gexv91hgv',
			tripDayActivities: [],
		},
	]);

	const dispatch = useAppDispatch();
	const newlyAddedActivity = useAppSelector((state) => state.newActivity);
	const newlyAddedAccommodation = useAppSelector((state) => state.newAccommodation);
	const newlyAddedTravel = useAppSelector((state) => state.newTravel);

	const bottomSheetRef = useRef<BottomSheet>(null);
	useEffect(() => {
		if (newlyAddedActivity.uid !== '') {
			console.log('NEW ACTIVITY ==================>', newlyAddedActivity);
			bottomSheetRef.current?.close();
			setTripDays((prev) => {
				const newState: TripDays[] = [];
				prev.forEach((_, index) => {
					if (selectedDay === index) {
						newState.push({
							id: prev[index].id,
							dayIndex: prev[index].dayIndex,
							tripId: prev[index].tripId,
							tripDayActivities: [
								...prev[index].tripDayActivities,
								{
									id: newlyAddedActivity.location.googleId!,
									tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
									order: 0,
									dayActivityId: 'cl6z69iq300354dbsso8a6nmx',
									accommodationId: null,
									travelEventId: null,
									accommodation: null,
									travel: null,
									dayActivity: {
										id: 'cl6z69iq300344dbs3q75b9ft80',
										activity: newlyAddedActivity,
									},
								},
							],
						});
					} else {
						newState.push(prev[index]);
					}
				});
				return newState;
			});
			setSelectedDay('');
			dispatch(clearActivityState());
		}
	}, [newlyAddedActivity]);
	useEffect(() => {
		if (newlyAddedAccommodation.uid !== '') {
			console.log('NEW ACCOMMODATION ===================>', newlyAddedAccommodation);
			bottomSheetRef.current?.close();
			setTripDays((prev) => {
				const newState: TripDays[] = [];
				prev.forEach((_, index) => {
					if (selectedDay === index) {
						newState.push({
							id: prev[index].id,
							dayIndex: prev[index].dayIndex,
							tripId: prev[index].tripId,
							tripDayActivities: [
								...prev[index].tripDayActivities,
								{
									id: newlyAddedAccommodation.location.googleId!,
									tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
									order: 0,
									dayActivityId: null,
									accommodationId: 'cl6z69iq300354dbsso8a6nmx',
									travelEventId: null,
									accommodation: newlyAddedAccommodation,
									travel: null,
									dayActivity: null,
								},
							],
						});
					} else {
						newState.push(prev[index]);
					}
				});
				return newState;
			});
			setSelectedDay('');
			dispatch(clearAccommodationState());
		}
	}, [newlyAddedAccommodation]);
	useEffect(() => {
		if (newlyAddedTravel.uid !== '') {
			console.log('NEW TRAVEL ==================>', newlyAddedTravel);
			bottomSheetRef.current?.close();
			setTripDays((prev) => {
				const newState: TripDays[] = [];
				prev.forEach((_, index) => {
					if (selectedDay === index) {
						newState.push({
							id: prev[index].id,
							dayIndex: prev[index].dayIndex,
							tripId: prev[index].tripId,
							tripDayActivities: [
								...prev[index].tripDayActivities,
								{
									id: newlyAddedTravel.origin.googleId!,
									tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
									order: 0,
									dayActivityId: null,
									accommodationId: null,
									travelEventId: 'cl6z69iq300354dbsso8a6nmx',
									accommodation: null,
									travel: newlyAddedTravel,
									dayActivity: null,
								},
							],
						});
					} else {
						newState.push(prev[index]);
					}
				});
				return newState;
			});
			setSelectedDay('');
			dispatch(clearTravelState());
		}
	}, [newlyAddedTravel]);

	const addEventToDay = (day: number) => {
		setSelectedDay(day);
		bottomSheetRef.current?.expand();
	};

	return (
		<View flex={1} pt={4} pb="16">
			<Heading alignSelf="center" fontWeight="semibold">
				Edit your Itinerary
			</Heading>
			<NestableScrollContainer style={{ height: '100%' }}>
				{tripDays.map((tripDay) => (
					<View key={tripDay.id} mt="4">
						<Pressable onPress={() => addEventToDay(tripDay.dayIndex)}>
							<HStack alignItems="center" justifyContent="center">
								<Heading alignSelf="center" fontWeight="semibold">
									Day {tripDay.dayIndex + 1}
								</Heading>
								<Divider width="50%" mx="5" />
								<AddIcon size={35} color="#0f0f0f" />
							</HStack>
						</Pressable>
						{tripDay.tripDayActivities.length > 0 ? (
							<NestableDraggableFlatList
								data={tripDay.tripDayActivities}
								renderItem={RenderItem}
								keyExtractor={(item: DayAct) => item.id} // Change this
								onDragEnd={({ data }) => {
									setTripDays((prev) => {
										const newState: any[] = [];
										prev.forEach((_, index) => {
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
						) : (
							<Box bgColor="#d1d1d1" mx="10" mt={1}>
								<EmptyList text="Nothing on this trip yet" />
							</Box>
						)}
					</View>
				))}
			</NestableScrollContainer>
			<PickEventBS bottomSheetRef={bottomSheetRef} />
		</View>
	);
}

export default ModifyTrip;
