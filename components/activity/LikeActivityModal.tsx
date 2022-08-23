import { View, Text } from 'native-base';
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useAppSelector } from '../../app/hooks';

function LikeActivityModal() {
	const trips = useAppSelector((state) => state.tripArray);
	return (
		<BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
			<View alignItems="center">
				<Text fontSize="xl" fontWeight="medium" mb={2}>
					Activities
				</Text>
				<ScrollView w="full">
					{trips.map((trip, index) => (
						<Box w="full" alignItems="center" key={trip.id}>
							{filterByActivity(trip.tags) && (
								<Pressable
									// onPress={() => addActivityToDay(activity)}
									shadow={1}
									mb={index + 1 === activities.length ? '20' : 4}
								>
									<ActivityCard activity={activity} />
								</Pressable>
							)}
						</Box>
					))}
				</ScrollView>
			</View>
		</BottomSheet>
	);
}

export default LikeActivityModal;
