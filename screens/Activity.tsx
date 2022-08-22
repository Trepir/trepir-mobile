import { View, Text } from 'native-base';
import React from 'react';
import { useAppSelector } from '../app/hooks';
import TopViewTrip from '../components/Trip/TopViewTrip';
import { TripStackScreenProps } from '../types';

function ActivityScreen({ navigation }: TripStackScreenProps<'Trip'>) {
	const activity = useAppSelector((state) => state.currentActivity);
	console.log('What I get on Activity Screen', activity);

	const ModifyTrip = () => {
		navigation.navigate('ModifyTrip');
	};

	return (
		<View flex={1} width="100%" alignItems="center" justifyContent="flex-start">
			<TopViewTrip title={activity.name} callback={ModifyTrip} />
			<View flex={1} width="100%" bgColor="transparent">
				<Text>{activity.description}</Text>
				<Text>{activity.location.formattedAddress}</Text>
				{activity.time && <Text>{activity.time.getDate()}</Text>}
				<Text>{activity.duration}</Text>
				<Text>{activity.tags}</Text>
			</View>
		</View>
	);
}

export default ActivityScreen;
