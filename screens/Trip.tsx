import { View, FlatList, HStack, Heading, Divider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import TopViewTrip from '../components/Trip/TopViewTrip';
import ActivityCard from '../components/ui/ActivityCard';
import { TripStackScreenProps } from '../types';

function Trip({ navigation }: TripStackScreenProps<'Trip'>) {
	const ModifyTrip = () => {
		navigation.navigate('ModifyTrip');
	};

	const Day1 = {
		date: 'October 20',
		activities: [
			{
				id: 'cl6yulnyy00133z4kc749ystla',
				name: 'Go to the beach asdjfa ljasdnfp asdjnfas asdfna asdlfjkasd asjkldfnas',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
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
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
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
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
		],
	};
	const Day2 = {
		date: 'October 21',
		activities: [
			{
				id: 'cl6yulnyy00133z4kc749ystla',
				name: 'Go to the beach',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
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
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
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
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
			{
				id: 'cl6yulnyy00133z4kc749ystlgasdf',
				name: 'Go to the beach',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
		],
	};
	const Day3 = {
		date: 'October 22',
		activities: [
			{
				id: 'cl6yulnyy00133z4kc749ystlghyu',
				name: 'Go to the beach',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Sitges',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
			{
				id: 'cl6yulnyy00133z4kc749ystlgw34',
				name: 'Go to the beach',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Sitges',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
			{
				id: 'cl6yulnyy00133z4kc749ystlg3xcdfgn',
				name: 'Go to the beach',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Sitges',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
			{
				id: 'cl6yulnyy00133z4kc749ystlg23xzdghf',
				name: 'Go to the beach',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
		],
	};
	const Day4 = {
		date: 'October 23',
		activities: [
			{
				id: 'cl6yulnyy00133z4kc749ystlg345xdcfh',
				name: 'Go to the beach',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
			{
				id: 'cl6yulnyy00133z4kc749ystlg n3',
				name: 'Go to the beach',
				duration: 120000,
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
				description: 'Swim in the ocean',
				timeStart: 0,
				timeEnd: 0,
				rating: null,
				location: {
					latitude: 0,
					longitude: 0,
					country: '',
					state: '',
					locationName: '',
					city: 'Barcelona',
					googleId: null,
				},
				tags: [],
				eventType: 'Activity',
			},
		],
	};

	const days = [Day1, Day2, Day3, Day4];

	const styles = StyleSheet.create({
		list: {
			justifyContent: 'center',
			alignItems: 'center',
		},
	});
	return (
		<View flex={1} width="100%" alignItems="center" justifyContent="flex-start">
			<TopViewTrip title="Barcelona with friends" callback={ModifyTrip} />
			<View flex={1} width="100%" bgColor="transparent" py={3}>
				<FlatList
					contentContainerStyle={styles.list}
					width="full"
					data={days}
					keyExtractor={(item) => item.date!}
					renderItem={({ item }) => (
						<View width="100%" m={1}>
							<HStack alignItems="center" justifyContent="center" py={1}>
								<Heading alignSelf="center" fontWeight="semibold">
									{item.date}
								</Heading>
								<Divider width="50%" mx="5" />
							</HStack>
							<FlatList
								contentContainerStyle={styles.list}
								width="full"
								data={item.activities}
								keyExtractor={(act) => act.id!}
								renderItem={({ item }) => (
									<View m={1}>
										<ActivityCard activity={item} />
									</View>
								)}
							/>
							{/* {item.activities.length > 0 ? (
								
							) : (
								<EmptyList text="The trip is empty, add some activities!" />
							)} */}
						</View>
					)}
				/>
			</View>
		</View>
	);
}

export default Trip;
