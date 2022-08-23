import { View, Text, ScrollView, Pressable, Divider } from 'native-base';
import React, { useMemo } from 'react';
import BottomSheet, { BottomSheetFlatList, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useAppSelector } from '../../app/hooks';
import TripItem from '../ui/TripItem';
import ButtonWide from '../ui/ButtonWide';

function LikeActivityModal({ bottomSheetRef }: { bottomSheetRef: React.Ref<BottomSheet> }) {
	const allTrips = useAppSelector((state) => state.tripArray);
	const currentDate = new Date().toISOString();
	const trips = allTrips.filter((trip) => trip.endDate > currentDate);
	const snapPoints = useMemo(() => ['70%'], []);
	return (
		<BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose>
			<View alignItems="center" width="100%" pt={3}>
				<ButtonWide text="Add to liked activities" pressFunction={() => {}} />
				<Text fontSize="xl" fontWeight="semibold" my={2}>
					OR
				</Text>
				<Text fontSize="lg" fontWeight="medium" mb={2}>
					Pick a trip to add it to the activity list
				</Text>
				<Divider width="90%" />
				{/* <BottomSheetFlatList
					data={trips}
					keyExtractor={(item) => item.id}
					renderItem={(item) => (
						<View width="100%" height="24">
							<TripItem trip={item.item} />
						</View>
					)}
				/> */}
				{/* <BottomSheetScrollView style={{ width: '100%' }}>
					{trips.map((trip) => (
						<Pressable key={trip.id} alignSelf="center">
							<TripItem trip={trip} />
						</Pressable>
					))}
				</BottomSheetScrollView> */}
				<ScrollView style={{ width: '100%' }}>
					{trips.map((trip) => (
						<Pressable key={trip.id} alignSelf="center">
							<TripItem trip={trip} />
						</Pressable>
					))}
				</ScrollView>
			</View>
		</BottomSheet>
	);
}

export default LikeActivityModal;
