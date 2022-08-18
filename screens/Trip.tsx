import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, FlatList, ScrollView } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import AddIcon from '../assets/icons/AddIcon';
import EmptyList from '../components/createTrip/EmptyList';
import TopViewTrip from '../components/Trip/TopViewTrip';
import ActivityCard from '../components/ui/ActivityCard';
import Colors from '../constants/Colors';
import { TripStackScreenProps } from '../types';

function Trip({ navigation }: TripStackScreenProps<'Trip'>) {
	const ModifyTrip = () => {
		navigation.navigate('ModifyTrip');
	};
	const activities = [
		{
			id: 'cl6yulnyy00133z4kc749ystla',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystld',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlf',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlg',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlg',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlg',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlg',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlg',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlg',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlg',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			time: null,
			rating: null,
			locationId: 'cl6yulnyz00143z4k7loyzvrz',
			tags: [],
			eventType: 'Activity',
		},
	];

	const styles = StyleSheet.create({
		list: {
			justifyContent: 'center',
			alignItems: 'center',
		},
	});
	return (
		<View flex={1} alignItems="center" justifyContent="flex-start">
			<TopViewTrip title="Mock Title" callback={ModifyTrip} />
			<View flex={1} width="100%">
				{activities.length > 0 ? (
					<FlatList
						contentContainerStyle={styles.list}
						width="full"
						data={activities}
						keyExtractor={(item) => item.id!}
						renderItem={({ item }) => (
							<View m={1}>
								<ActivityCard activity={item} />
							</View>
						)}
					/>
				) : (
					<EmptyList text="The trip is empty, add some activities!" />
				)}
			</View>
		</View>
	);
}

export default Trip;
