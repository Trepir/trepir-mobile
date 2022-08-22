import { View, Heading, Pressable, HStack, Divider, Box } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {
	NestableScrollContainer,
	NestableDraggableFlatList,
	RenderItemParams,
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
import { TripDay, DayAct, ActivityEvent, Trip } from '../types';
import AddIcon from '../assets/icons/AddIcon';
import EmptyList from '../components/createTrip/EmptyList';
import {
	addAccommodationToTrip,
	addActivityToTrip,
	addTravelToTrip,
	deleteEventFromTrip,
} from '../services/ModifyTripService';
import { addDates } from '../features/createTripValidation/CTValidationSlice';
import { createActivityApi } from '../services/ActivityService';

function ModifyTrip() {
	const trip = useAppSelector((state) => state.currentTrip);

	const [selectedDay, setSelectedDay] = useState<'' | number>('');
	const [tripDays, setTripDays] = useState<TripDay[]>(trip.tripDay);

	const dispatch = useAppDispatch();
	const newlyAddedActivity = useAppSelector((state) => state.newActivity);
	const newlyAddedAccommodation = useAppSelector((state) => state.newAccommodation);
	const newlyAddedTravel = useAppSelector((state) => state.newTravel);

	const bottomSheetRef = useRef<BottomSheet>(null);

	useEffect(() => {
		dispatch(addDates({ startingDate: trip.startDate, endingDate: trip.endDate }));
	}, []);

	const addEventToDay = (day: number) => {
		setSelectedDay(day);
		bottomSheetRef.current?.expand();
	};

	const replaceDayState = (day: TripDay) => {
		setTripDays(
			tripDays.map((tripDay) => {
				if (tripDay.id === day.id) {
					return day;
				}
				return tripDay;
			})
		);
	};
	const replaceTwoDayState = (day: TripDay[]) => {
		setTripDays(
			tripDays.map((tripDay) => {
				if (tripDay.id === day[0].id) {
					return day[0];
				}
				if (tripDay.id === day[1].id) {
					return day[1];
				}
				return tripDay;
			})
		);
	};
	const addActivityToDay = (newDay: TripDay) => {
		bottomSheetRef.current?.close();
		replaceDayState(newDay);
		setSelectedDay('');
	};

	useEffect(() => {
		if (newlyAddedAccommodation.uid !== '') {
			bottomSheetRef.current?.close();

			try {
				const addAccommodationToCurrentTrip = async () => {
					const newAccommodation = {
						...newlyAddedAccommodation,
						startDate: new Date(newlyAddedAccommodation.startDate).toISOString(),
						endDate: new Date(newlyAddedAccommodation.endDate).toISOString(),
						tripId: trip.id,
					};
					const tripDaysData = await addAccommodationToTrip(newAccommodation);
					replaceTwoDayState(tripDaysData.data!);
				};
				addAccommodationToCurrentTrip();
			} catch (error) {
				console.error();
			}

			setSelectedDay('');
			dispatch(clearAccommodationState());
		}
	}, [newlyAddedAccommodation]);

	useEffect(() => {
		if (newlyAddedTravel.uid !== '') {
			bottomSheetRef.current?.close();
			try {
				const addTravelToCurrentTrip = async () => {
					const newTravel = {
						...newlyAddedTravel,
						tripId: trip.id,
						travelType: newlyAddedTravel.type,
						origin: newlyAddedTravel.originLocation,
						destination: newlyAddedTravel.destinationLocation,
						departure: new Date(newlyAddedTravel.departure).toISOString(),
					};
					const addedTravel = await addTravelToTrip(newTravel);
					replaceDayState(addedTravel.data!);
				};
				addTravelToCurrentTrip();
			} catch (error) {
				console.error(error);
			}
		}
		setSelectedDay('');
		dispatch(clearTravelState());
	}, [newlyAddedTravel]);
	useEffect(() => {
		if (newlyAddedActivity.uid !== '') {
			try {
				const createAndAddActivity = async () => {
					const newActivity = {
						...newlyAddedActivity,
					};
					const createdActivity = await createActivityApi(newActivity);
					const activityAddedInfo = await addActivityToTrip({
						tripDayId: tripDays[+selectedDay].id,
						activityId: createdActivity.data!.id!,
					});
					addActivityToDay(activityAddedInfo.data!);
				};
				createAndAddActivity();
			} catch (error) {
				console.error(error);
			}
			dispatch(clearActivityState());
		}
	}, [newlyAddedActivity]);

	const deleteTripEvent = async (tripDayActivityId: string) => {
		try {
			const deleteInfo = await deleteEventFromTrip(tripDayActivityId);
			const dayDeleted = tripDays.find((day) => day.id === deleteInfo.data!.tripDayId);
			const filteredActivities = dayDeleted?.tripDayActivities.filter(
				(dayEvent) => dayEvent.id !== tripDayActivityId
			);
			const orderedDayActivities = filteredActivities?.map((dayEvent, index) => ({
				...dayEvent,
				order: index,
			}));
			setTripDays(
				tripDays.map((tripDay) => {
					if (tripDay.id === deleteInfo.data!.tripDayId) {
						return { ...tripDay, tripDayActivities: orderedDayActivities! };
					}
					return tripDay;
				})
			);
		} catch (error) {
			console.error(error);
		}
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
								renderItem={(renderItemParams: RenderItemParams<DayAct>) => (
									<RenderItem
										renderItemParams={renderItemParams}
										deleteTripEvent={deleteTripEvent}
									/>
								)}
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
			<PickEventBS bottomSheetRef={bottomSheetRef} addActivityToDay={addActivityToDay} />
		</View>
	);
}

export default ModifyTrip;
