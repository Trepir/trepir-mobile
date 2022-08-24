import { View, Text, Pressable, Divider } from 'native-base';
import React, { useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppSelector } from '../../app/hooks';
import TripItem from '../ui/TripItem';
import ButtonWide from '../ui/ButtonWide';
import { ActivityEvent } from '../../types';
import { addLikedActivity } from '../../services/ActivityService';

function LikeActivityModal({
	activity,
	bottomSheetRef,
}: {
	activity: ActivityEvent;
	bottomSheetRef: React.Ref<BottomSheet>;
}) {
	const allTrips = useAppSelector((state) => state.tripArray);
	const uid = useAppSelector((state) => state.user.uid);
	const currentDate = new Date().toISOString();
	const trips = allTrips.filter((trip) => trip.endDate > currentDate);
	const snapPoints = useMemo(() => ['70%'], []);

	const addToLiked = async (act: ActivityEvent) => {
		try {
			console.log('add to liked', act);
			const returnData = await addLikedActivity(act.id, uid);
			console.log(returnData);
			bottomSheetRef.current.close();
		} catch (error) {
			console.log(error);
		}
	};

	const addToLikedTrip = async (act: ActivityEvent, tripId: string) => {
		try {
			const returnData = await addLikedActivity(act.id, uid, tripId);
			console.log(returnData);
			bottomSheetRef.current.close();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose>
			<View alignItems="center" width="100%" pt={3}>
				<ButtonWide text="Add to liked activities" pressFunction={() => addToLiked(activity)} />
				<Text fontSize="xl" fontWeight="semibold" my={2}>
					OR
				</Text>
				<Text fontSize="lg" fontWeight="medium" mb={2}>
					Pick a trip to add it to the activity list
				</Text>
				<Divider width="90%" />
				<ScrollView style={{ width: '100%', height: '80%' }}>
					{trips.map((trip, index) => (
						<View key={trip.id} alignSelf="center" pb={index === trips.length - 1 ? 12 : 0}>
							<TripItem trip={trip} useNav={() => addToLikedTrip(activity, trip.id)} />
						</View>
					))}
				</ScrollView>
			</View>
		</BottomSheet>
	);
}

export default LikeActivityModal;
