import { View, Text, ScrollView, Pressable } from 'native-base';
import React, { useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useAppSelector } from '../../app/hooks';
import TripItem from '../ui/TripItem';

function LikeActivityModal({ bottomSheetRef }: { bottomSheetRef: React.Ref<BottomSheet> }) {
	const trips = useAppSelector((state) => state.tripArray);
	const snapPoints = useMemo(() => ['50%'], []);
	return (
		<BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
			<View alignItems="center">
				<Text fontSize="xl" fontWeight="medium" mb={2}>
					Activities
				</Text>
				<ScrollView w="full">
					{trips.map((trip) => (
						<Pressable key={trip.id}>
							<TripItem trip={trip} />
						</Pressable>
					))}
				</ScrollView>
			</View>
		</BottomSheet>
	);
}

export default LikeActivityModal;
