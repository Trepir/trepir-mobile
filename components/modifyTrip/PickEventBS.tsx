import React, { Ref, useEffect, useMemo, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, Text, Divider, Pressable } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonGroup from './ButtonGroup';
import ActivityCard from '../ui/ActivityCard';
import { ActivityEvent } from '../../types';
import { getAllActivities } from '../../services/ActivityService';

type Props = {
	bottomSheetRef: Ref<BottomSheet>;
	// eslint-disable-next-line no-unused-vars
	addActivityToDay: (activity: ActivityEvent) => void;
};

function PickEventBS({ bottomSheetRef, addActivityToDay }: Props) {
	const snapPoints = useMemo(() => ['60%', '80%'], []);
	const [activities, setActivities] = useState<ActivityEvent[]>([]);
	useEffect(() => {
		const getActivitiesFromBE = async () => {
			try {
				const allActivities = await getAllActivities();
				setActivities([...allActivities.data!]);
			} catch (error) {
				console.error(error);
			}
		};
		getActivitiesFromBE();
	}, []);

	return (
		<BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose>
			<View alignItems="center">
				<Text fontSize="xl" fontWeight="medium" mb={2}>
					Add something new
				</Text>
				<ButtonGroup />
				<Divider my={5} w="85%" />

				<Text fontSize="xl" fontWeight="medium" mb={2}>
					Select from you own Activities
				</Text>

				<ScrollView contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
					{activities.map((activity, index) => (
						<Pressable
							onPress={() => addActivityToDay(activity)}
							key={activity.id}
							shadow={1}
							mb={index + 1 === activities.length ? '48' : 4}
							width="100%"
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
