import React, { Ref, useEffect, useMemo, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, Text, Divider, Pressable } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonGroup from './ButtonGroup';
import ActivityCard from '../ui/ActivityCard';
import { ActivityEvent } from '../../types';
import { getAllActivities } from '../../services/ActivityService';
import { Dimensions } from 'react-native';
import { useAppSelector } from '../../app/hooks';

type Props = {
	bottomSheetRef: Ref<BottomSheet>;
	// eslint-disable-next-line no-unused-vars
	addActivityToDay: (activity: ActivityEvent) => void;
};

function PickEventBS({ bottomSheetRef, addActivityToDay }: Props) {
	const tripSavedActivities = useAppSelector((state) => state.currentTrip.favouriteActivities);
	const snapPoints = useMemo(() => ['60%', '80%'], []);

	return (
		<BottomSheet
			ref={bottomSheetRef}
			index={-1}
			snapPoints={snapPoints}
			enablePanDownToClose
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 5,
				elevation: 5,
			}}
		>
			<View alignItems="center">
				<Text fontSize="xl" fontWeight="medium" mb={2}>
					Add something new
				</Text>
				<ButtonGroup />
				<Divider my={5} w="85%" />

				<Text fontSize="xl" fontWeight="medium" mb={2}>
					Select from you own Activities
				</Text>

				<ScrollView
					style={{ width: Dimensions.get('window').width }}
					contentContainerStyle={{ alignItems: 'center' }}
				>
					{tripSavedActivities.map((activity, index) => (
						<Pressable
							onPress={() => addActivityToDay(activity)}
							key={activity.id}
							shadow={1}
							mb={index + 1 === tripSavedActivities.length ? '48' : 4}
							width="100%"
							alignItems="center"
						>
							<ActivityCard activity={activity} />
						</Pressable>
					))}
				</ScrollView>
			</View>
		</BottomSheet>
	);
}

export default PickEventBS;
