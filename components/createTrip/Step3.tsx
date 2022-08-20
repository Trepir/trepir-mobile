import { useNavigation } from '@react-navigation/native';
import { View, Heading, Divider, ScrollView, Box, Pressable } from 'native-base';
import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import Colors from '../../constants/Colors';
import { Activity } from '../../types';
import ActivityCard from '../ui/ActivityCard';
import ButtonCustom from '../ui/ButtonCustom';
import EmptyList from './EmptyList';

type Props = {
	// eslint-disable-next-line no-unused-vars
	jumpTo: (key: string) => void;
};
function Step3({ jumpTo }: Props) {
	const navigation = useNavigation();
	const likedActivities = useAppSelector((state) => state.likedActivities);
	const activities: Activity[] = [
		{
			id: 'cl6yulnyy00133z4kc749ystla',
			name: 'Go to the beach asdjfa ljasdnfp asdjnfas asdfna asdlfjkasd asjkldfnas',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			rating: null,
			location: {
				latitude: 0,
				formattedAddress: '',
				photoUrl: [''],
				longitude: 0,
				country: '',
				state: '',
				locationName: '',
				city: 'Barcelona',
				googleId: '1',
			},
			tags: [],
		},
		{
			id: 'cl6yulnyy00133z4kc749ystld',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',

			rating: null,
			location: {
				latitude: 0,
				formattedAddress: '',
				photoUrl: [''],
				longitude: 0,
				country: '',
				state: '',
				locationName: '',
				city: 'Barcelona',
				googleId: '2',
			},
			tags: [],
		},
		{
			id: 'cl6yulnyy00133z4kc749ystlf',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',
			rating: null,
			location: {
				latitude: 0,
				formattedAddress: '',
				photoUrl: [''],
				longitude: 0,
				country: '',
				state: '',
				locationName: '',
				city: 'Barcelona',
				googleId: '3',
			},
			tags: [],
		},

		{
			id: 'cl6yulnyy00133z4kc749ystla',
			name: 'Go to the beach',
			duration: 120000,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
			description: 'Swim in the ocean',

			rating: null,
			location: {
				latitude: 0,
				formattedAddress: '',
				photoUrl: [''],
				longitude: 0,
				country: '',
				state: '',
				locationName: '',
				city: 'Barcelona',
				googleId: '4',
			},
			tags: [],
		},
	];
	const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
	const isActivitySelected = (id: string) => selectedActivities.includes(id);
	const addTripsAndGoBack = () => {
		// HAVE TO ADD THE TRIPS HERE
		jumpTo('first');
		navigation.goBack();
	};

	return (
		<View flex={1} alignItems="center" bgColor={Colors.grey.offWhite} px={10}>
			<Heading alignSelf="center" mt={5} fontWeight="semibold">
				Trip Created Successfully
			</Heading>
			<Divider my={4} />
			<Heading alignSelf="center" fontWeight="semibold" textAlign="center" mb={2}>
				Add some Activities so you can start planning
			</Heading>
			{activities.length > 0 ? (
				<ScrollView w="100%">
					{activities.map((activity) => (
						<Pressable
							onPress={() => {
								if (!isActivitySelected(activity.id!)) {
									setSelectedActivities([...selectedActivities, activity.id!]);
								} else {
									setSelectedActivities(selectedActivities.filter((id) => activity.id !== id));
								}
							}}
							alignSelf="center"
							my={2}
							borderRadius={18}
							borderWidth={isActivitySelected(activity.id!) ? 2 : 0}
							borderColor={isActivitySelected(activity.id!) ? Colors.primary.light : 'rgb(0,0,0,0)'}
						>
							<ActivityCard activity={activity} />
						</Pressable>
					))}
				</ScrollView>
			) : (
				<Box bgColor="gray.300">
					<EmptyList text="No activities yet" />
				</Box>
			)}
			<Box my={4}>
				<ButtonCustom
					text="Go back to Dashboard"
					alignment="center"
					pressFunction={addTripsAndGoBack}
				/>
			</Box>
		</View>
	);
}

export default Step3;
