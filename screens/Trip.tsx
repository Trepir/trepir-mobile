import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, FlatList, ScrollView } from 'native-base';
import React from 'react';
import ActivityCard from '../components/ui/ActivityCard';
import { TripStackScreenProps } from '../types';

function Trip({ navigation }: TripStackScreenProps<'Trip'>) {
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
	return (
		<View flex={1} alignItems="center">
			<Pressable
				onPress={() => {
					navigation.navigate('ModifyTrip');
				}}
				mb={5}
			>
				<Text>ModifyTrip</Text>
			</Pressable>
			<ScrollView height="100%">
				{activities.map((activity) => (
					<View mb={2} key={activity.id}>
						<ActivityCard activity={activity} />
					</View>
				))}
			</ScrollView>
		</View>
	);
}

export default Trip;
