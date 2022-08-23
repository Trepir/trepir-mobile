import { View, Heading, Pressable, HStack, Divider, Box } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import RenderItem from '../components/modifyTrip/RenderItem';
import { clearAccommodationState } from '../features/newAccommodation/newAccommodationSlice';
import PickEventBS from '../components/modifyTrip/PickEventBS';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearTravelState } from '../features/newTravel/newTravelSlice';
import { clearActivityState } from '../features/newActivity/newActivitySlice';
import { TripDay, DayAct, Trip } from '../types';
import AddIcon from '../assets/icons/AddIcon';
import {
	addAccommodationToTrip,
	addActivityToTrip,
	addTravelToTrip,
	changeTripDay,
	deleteEventFromTrip,
	reorderTripDay,
} from '../services/ModifyTripService';
import { addDates } from '../features/createTripValidation/CTValidationSlice';
import { createActivityApi } from '../services/ActivityService';
import { storeCurrentTrip } from '../features/trip/currentTripSlice';

const spreadTripDays = (tripDays: TripDay[]) => {
	const spreadedDays = tripDays.map((day) => [
		{ id: day.id, dayIndex: day.dayIndex, tripId: day.tripId },
		...day.tripDayActivities,
	]);
	const spreadedAll = spreadedDays.flat();
	return spreadedAll;
};

function ModifyTrip() {
	const trip = useAppSelector((state) => state.currentTrip);

	const [selectedDay, setSelectedDay] = useState<'' | number>('');
	const [tripDays, setTripDays] = useState<TripDay[]>(trip.tripDay);
	const [tripDaysSpread, setTripDaysSpread] = useState<any[]>(spreadTripDays(trip.tripDay));

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
	const updateCurrentTrip = (newTripDaysState: TripDay[]) => {
		const newCurrentTrip: Trip = {
			...trip,
			tripDay: [...newTripDaysState],
		};
		dispatch(storeCurrentTrip(newCurrentTrip));
	};

	const updateTripDaysStates = (newTripDaysState: TripDay[]) => {
		updateCurrentTrip(newTripDaysState);
		setTripDays(newTripDaysState);
		setTripDaysSpread(spreadTripDays(newTripDaysState));
	};

	const replaceDayState = (day: TripDay) => {
		const newTripDaysState = tripDays.map((tripDay) => {
			if (tripDay.id === day.id) {
				return day;
			}
			return tripDay;
		});

		updateTripDaysStates(newTripDaysState);
	};
	const replaceTwoDayState = (day: TripDay[]) => {
		const newTripDaysState = tripDays.map((tripDay) => {
			if (tripDay.id === day[0].id) {
				return day[0];
			}
			if (tripDay.id === day[1].id) {
				return day[1];
			}
			return tripDay;
		});
		updateTripDaysStates(newTripDaysState);
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
			if (deleteInfo.data!.length === 1) {
				replaceDayState(deleteInfo.data![0]);
			} else {
				replaceTwoDayState(deleteInfo.data!);
			}
		} catch (error) {
			console.error(error);
		}
	};
	const reestructureSpreadTripDays = (spreadData: any[]) => {
		const reestructuredArray = [];

		while (spreadData.length > 0) {
			if (spreadData[0].dayIndex !== undefined) {
				reestructuredArray.push({ ...spreadData.shift(), tripDayActivities: [] });
			} else {
				reestructuredArray[reestructuredArray.length - 1].tripDayActivities.push(
					spreadData.shift()
				);
			}
		}
		return reestructuredArray;
	};

	const isSameDay = (spreadData: any[]) => {
		let auxDay: { dayIndex: number; id: string; tripId: string } = {
			dayIndex: -1,
			id: '',
			tripId: '',
		};

		while (spreadData.length > 0) {
			if (spreadData[0].dayIndex !== undefined) {
				auxDay = spreadData.shift();
			} else {
				if (auxDay.id !== spreadData[0].tripDayId) {
					return {
						// sameDay: false,
						activityId: spreadData[0].dayActivity?.activity.id,
						// newOrder: number,
						newTripDayId: auxDay.id,
						previousTripDayId: spreadData[0].tripDayId,
						tripDayActivityId: spreadData[0].id,
					};
				}
				spreadData.shift();
			}
		}
		return true;
	};

	const getOrderOnDay = (tripDaysData: TripDay[], dayActivityId: string, tripDayId: string) => {
		const dayOfChange = tripDaysData.find((dayOfTrip: TripDay) => dayOfTrip.id === tripDayId);
		let newOrder = -1;
		dayOfChange?.tripDayActivities.forEach((activity, index) => {
			if (activity.id === dayActivityId) {
				newOrder = index;
			}
		});
		return newOrder;
	};

	const endDrag = async ({ data, from, to }: { data: any[]; from: number; to: number }) => {
		// Check if its trip or accommodation
		if (from !== to) {
			try {
				const spreadData = [...data];
				const movedOnSameDay = isSameDay([...spreadData]);
				const reestructuredData = reestructureSpreadTripDays([...spreadData]);
				// JUST WORKS
				setTripDaysSpread([...spreadData]);
				if (movedOnSameDay === true) {
					const reorderData = {
						newOrder: getOrderOnDay(reestructuredData, data[to].id, data[to].tripDayId),
						tripDayId: data[to].tripDayId,
						tripDayActivityId: data[to].id,
					};
					const newDayData = await reorderTripDay(reorderData);
					replaceDayState(newDayData.data!);
				} else {
					// DISSAPEARS ON DRAG END
					// setTripDaysSpread([...spreadData]);
					const changeDayOrder = {
						...movedOnSameDay,
						newOrder: getOrderOnDay(reestructuredData, data[to].id, movedOnSameDay.newTripDayId),
					};
					const tripDaysData = await changeTripDay(changeDayOrder);
					// console.log('CHANGE TRIP DAYS RESULT', tripDaysData.data);
					replaceTwoDayState(tripDaysData.data!);
				}
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<View flex={1} pt={4} pb="16">
			<Heading alignSelf="center" fontWeight="semibold" pb={4}>
				Edit your Itinerary
			</Heading>
			<Divider />
			{/* <Pressable onPress={() => addEventToDay(tripDaysSpread[0].dayIndex)}>
				<HStack alignItems="center" justifyContent="center">
					<Heading alignSelf="center" fontWeight="semibold">
						Day {tripDaysSpread[0].dayIndex + 1}
					</Heading>
					<Divider width="50%" mx="5" />
					<AddIcon size={35} color="#0f0f0f" />
				</HStack>
			</Pressable> */}
			<DraggableFlatList
				data={tripDaysSpread}
				onDragEnd={endDrag}
				keyExtractor={(item) => item.id}
				renderItem={(renderItemParams: RenderItemParams<DayAct>) => (
					<Box
						pt={renderItemParams.index === 0 ? '4' : '0'}
						pb={renderItemParams.index === tripDaysSpread.length - 1 ? '10' : '0'}
					>
						<RenderItem
							renderItemParams={renderItemParams}
							deleteTripEvent={deleteTripEvent}
							addEventToDay={addEventToDay}
						/>
					</Box>
				)}
			/>
			<PickEventBS bottomSheetRef={bottomSheetRef} addActivityToDay={addActivityToDay} />
		</View>
	);
}

export default ModifyTrip;
