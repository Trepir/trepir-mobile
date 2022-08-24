import { useNavigation } from '@react-navigation/native';
import { View, Heading, Divider, ScrollView, Box, Pressable } from 'native-base';
import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import Colors from '../../constants/Colors';
import { getAllActivities } from '../../services/ActivityService';
import { ActivityEvent } from '../../types';
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
	const [activities, setActivities] = useState<ActivityEvent[]>([]);
	const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
	const isActivitySelected = (id: string) => selectedActivities.includes(id);

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

	const addTripsAndGoBack = async () => {
		// HAVE TO ADD THE TRIPS HERE
		try {
			selectedActivities.forEach((activity) => {
				// ADD ACTIVITY TO FAVORITES
				console.log(activity);
			});
		} catch (error) {
			console.error(error);
		}

		navigation.goBack();
	};

	return (
		<>
			<View flex={1} alignItems="center" bgColor={Colors.grey.offWhite}>
				<Heading alignSelf="center" mt={5} fontWeight="semibold">
					Trip Created Successfully!!
				</Heading>
				<Divider my={4} />
				<Heading alignSelf="center" fontWeight="semibold" textAlign="center" mb={2} px={5}>
					Add some Activities so you can start planning
				</Heading>
				{activities.length > 0 ? (
					<ScrollView w="100%">
						{activities.map((activity, index) => (
							<Box key={activity.id} mb={index === activities.length - 1 ? '32' : 0.5}>
								<Pressable
									onPress={() => {
										if (!isActivitySelected(activity.id!)) {
											setSelectedActivities([...selectedActivities, activity.id!]);
										} else {
											setSelectedActivities(selectedActivities.filter((id) => activity.id !== id));
										}
										console.log(selectedActivities);
									}}
									alignSelf="center"
									p={0.5}
									bgColor={isActivitySelected(activity.id!) ? Colors.primary.light : Colors.white}
									my={2}
									borderRadius={20}
								>
									<ActivityCard activity={activity} />
								</Pressable>
							</Box>
						))}
					</ScrollView>
				) : (
					<Box bgColor="gray.300">
						<EmptyList text="No activities yet" />
					</Box>
				)}
			</View>
			<Box position="absolute" bottom={10} zIndex={10} alignSelf="center">
				<ButtonCustom
					text="Go back to Dashboard"
					alignment="center"
					pressFunction={() => addTripsAndGoBack()}
				/>
			</Box>
		</>
	);
}

export default Step3;
