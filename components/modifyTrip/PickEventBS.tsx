import React, { Ref, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, Text, Divider, Pressable } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonGroup from './ButtonGroup';
import ActivityCard from '../ui/ActivityCard';
import { Activity } from '../../types';

type Props = {
	bottomSheetRef: Ref<BottomSheet>;
	// eslint-disable-next-line no-unused-vars
	addActivityToDay: (activity: Activity) => void;
};

function PickEventBS({ bottomSheetRef, addActivityToDay }: Props) {
	const snapPoints = useMemo(() => ['60%', '80%'], []);

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
				googleId: null,
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
				googleId: null,
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
				googleId: null,
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
				googleId: null,
			},
			tags: [],
		},
	];

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

				<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
					{activities.map((activity, index) => (
						<Pressable
							onPress={() => addActivityToDay(activity)}
							key={activity.id}
							shadow={1}
							mb={index + 1 === activities.length ? '48' : 4}
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
