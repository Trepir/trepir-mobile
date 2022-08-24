import { useNavigation } from '@react-navigation/native';
import { View, Heading, Divider, ScrollView, Box, Pressable } from 'native-base';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useAppSelector } from '../../app/hooks';
import Colors from '../../constants/Colors';
import { getAllActivities } from '../../services/ActivityService';
import { addActivitiesToTripFav } from '../../services/CreateTripService';
import { ActivityEvent } from '../../types';
import ActivityCard from '../ui/ActivityCard';
import ButtonCustom from '../ui/ButtonCustom';
import EmptyList from './EmptyList';

type Props = {
	// eslint-disable-next-line no-unused-vars
	jumpTo: (key: string) => void;
	createdId: string;
};
function Step3({ jumpTo, createdId }: Props) {
	const navigation = useNavigation();
	const likedActivities = useAppSelector((state) => state.likedActivities);
	const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
	const isActivitySelected = (id: number) => selectedActivities.includes(id);

	const addTripsAndGoBack = async () => {
		try {
			if (selectedActivities.length > 0) {
				await addActivitiesToTripFav({
					favoriteId: selectedActivities,
					tripId: createdId,
				});
			}
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
				{likedActivities.length > 0 ? (
					<ScrollView w="100%">
						{likedActivities.map(({ id, activity }, index) => (
							<Box key={activity.id} pb={index === likedActivities.length - 1 ? '32' : 0.5}>
								<Pressable
									onPress={() => {
										if (!isActivitySelected(id)) {
											setSelectedActivities([...selectedActivities, id]);
										} else {
											setSelectedActivities(selectedActivities.filter((actID) => id !== actID));
										}
										console.log(selectedActivities);
									}}
									alignSelf="center"
									p={0.5}
									bgColor={isActivitySelected(id) ? Colors.primary.light : Colors.white}
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
