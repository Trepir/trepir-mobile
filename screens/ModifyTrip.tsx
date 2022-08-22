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
import { TripDay, DayAct, Activity } from '../types';
import AddIcon from '../assets/icons/AddIcon';
import EmptyList from '../components/createTrip/EmptyList';
import {
	addAccommodationToTrip,
	addActivityToTrip,
	addTravelToTrip,
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

	const addActivityToDay = (activityAdded: any) => {
		bottomSheetRef.current?.close();
		setTripDays((prev) => {
			const newState: TripDay[] = [];
			prev.forEach((_, index) => {
				if (selectedDay === index) {
					newState.push({
						id: prev[index].id,
						dayIndex: prev[index].dayIndex,
						tripId: prev[index].tripId,
						tripDayActivities: [
							...prev[index].tripDayActivities,
							{
								id: activityAdded.id!,
								tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
								order: 0,
								dayActivityId: 'cl6z69iq300354dbsso8a6nmx',
								accommodationId: null,
								travelEventId: null,
								accommodation: null,
								travel: null,
								dayActivity: {
									id: activityAdded.id,
									activity: activityAdded.activity,
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
	};

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

			// const addActivity = async () => {
			// 	try {
			// 	} catch (error) {
			// 		console.error(error);
			// 	}
			// 	// try {
			// 	// 	const fetchedTrip = await fetchTrip(id);
			// 	// 	if (fetchedTrip.data) {
			// 	// 		dispatch(storeCurrentTrip(fetchedTrip.data));
			// 	// 		// console.log('trip that I save', fetchedTrip.data);
			// 	// 		navigation.navigate('TripStack' );
			// 	// 	}
			// 	// } catch (error) {
			// 	// 	console.error(error);
			// 	// }
			// };

			dispatch(clearActivityState());
		}
	}, [newlyAddedActivity]);

	useEffect(() => {
		if (newlyAddedAccommodation.uid !== '') {
			bottomSheetRef.current?.close();

			const addAccommodationToCurrentTrip = async () => {
				const newAccommodation = {
					...newlyAddedAccommodation,
					startDate: new Date(newlyAddedAccommodation.startDate).toISOString(),
					endDate: new Date(newlyAddedAccommodation.endDate).toISOString(),
					tripId: trip.id,
				};
				await addAccommodationToTrip(newAccommodation);
			};
			addAccommodationToCurrentTrip();

			// setTripDays((prev) => {
			// 	const newState: TripDay[] = [];
			// 	prev.forEach((_, index) => {
			// 		if (selectedDay === index) {
			// 			newState.push({
			// 				id: prev[index].id,
			// 				dayIndex: prev[index].dayIndex,
			// 				tripId: prev[index].tripId,
			// 				tripDayActivities: [
			// 					...prev[index].tripDayActivities,
			// 					{
			// 						id: newlyAddedAccommodation.location.googleId!,
			// 						tripDayId: 'cl6z69iop00104dbsi2rg4i3x',
			// 						order: 0,
			// 						dayActivityId: null,
			// 						accommodationId: 'cl6z69iq300354dbsso8a6nmx',
			// 						travelEventId: null,
			// 						accommodation: newlyAddedAccommodation,
			// 						travel: null,
			// 						dayActivity: null,
			// 					},
			// 				],
			// 			});
			// 		} else {
			// 			newState.push(prev[index]);
			// 		}
			// 	});
			// 	return newState;
			// });
			setSelectedDay('');
			dispatch(clearAccommodationState());
		}
	}, [newlyAddedAccommodation]);

	useEffect(() => {
		if (newlyAddedTravel.uid !== '') {
			bottomSheetRef.current?.close();
			const addTravelToCurrentTrip = async () => {
				const newTravel = {
					...newlyAddedTravel,
					tripId: trip.id,
					departure: new Date(newlyAddedTravel.departure).toISOString(),
				};
				try {
					const addedTravel = await addTravelToTrip(newTravel);
					setTripDays((prev) => {
						const newState: TripDay[] = [];
						prev.forEach((_, index) => {
							if (selectedDay === index) {
								newState.push({
									id: prev[index].id,
									dayIndex: prev[index].dayIndex,
									tripId: prev[index].tripId,
									tripDayActivities: [
										...prev[index].tripDayActivities,
										{
											id: addedTravel.data!.id, // WHAT IS THIS ID
											tripDayId: addedTravel.data!.tripDayId,
											order: 0,
											dayActivityId: null,
											accommodationId: null,
											travelEventId: addedTravel.data!.id,
											accommodation: null,
											travel: { ...newlyAddedTravel, id: addedTravel.data!.id },
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
				} catch (error) {
					console.error(error);
				}
			};
			addTravelToCurrentTrip();

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
			<PickEventBS bottomSheetRef={bottomSheetRef} addActivityToDay={addActivityToDay} />
		</View>
	);
}

export default ModifyTrip;
