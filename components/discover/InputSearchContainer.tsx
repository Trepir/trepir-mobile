import React, { Ref, useMemo, useState } from 'react';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import Constants from 'expo-constants';
import { Box, Pressable, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityTags } from '../../constants/ActivityTags';
import GooglePlacesInput from '../utils/GooglePlacesInput';
import Colors from '../../constants/Colors';
import { ActivityEvent, DayAct } from '../../types';
import ActivityCard from '../ui/ActivityCard';
import { storeCurrentActivity } from '../../features/currentActivity/currentActivitySlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import HeartIcon from '../../assets/icons/HeartIcon';
import EmptyList from '../createTrip/EmptyList';

const styles = StyleSheet.create({
	input: {
		borderColor: Colors.primary.normal,
		borderWidth: 2,
		borderRadius: 15,
	},
	placeholder: {
		color: '#c1c1c1',
		fontWeight: '600',
	},
});

type Props = {
	// eslint-disable-next-line no-unused-vars
	goToDestination: (_: any, details: GooglePlaceDetail) => void;
	bottomSheetRef: Ref<BottomSheet>;
	activities: ActivityEvent[];
	// eslint-disable-next-line no-unused-vars
	filterActivitiesByTags: (tags: ValueType[]) => void;
	goToActivity: (activity: ActivityEvent) => void;
};

function InputSearchContainer({
	goToDestination,
	bottomSheetRef,
	activities,
	filterActivitiesByTags,
	goToActivity,
}: Props) {
	const [openDropDown, setOpenDropDown] = useState(false);
	const [valueDropDown, setValueDropDown] = useState<string[]>([]);
	const [itemsDropDown, setItemsDropDown] = useState(ActivityTags);
	const navigation = useNavigation();
	const dispatch = useAppDispatch();
	const tripSavedActivities = useAppSelector((state) => state.likedActivities);

	const snapPoints = useMemo(() => ['30%', '60%'], []);

	const filterByActivity = (tags: string[]) =>
		valueDropDown.length === 0 ? true : tags.some((tag) => valueDropDown.includes(tag));

	const navToActivity = (item: ActivityEvent) => {
		// dispatch(storeCurrentActivity(item));
		// @ts-ignore
		dispatch(storeCurrentActivity({ dayActivity: { activity: item } }));
		navigation.navigate('ActivityScreen');
	};

	const isActivityLiked = (activityId: string) =>
		tripSavedActivities.some((act) => act.activityId === activityId);
	return (
		<>
			<Box
				position="absolute"
				zIndex={5}
				width="80%"
				style={{ top: Constants.statusBarHeight + 10 }}
			>
				<GooglePlacesInput
					queryType={['(cities)', '(regions)']}
					placeholder="Start discovering Activities"
					pressFunction={goToDestination}
				/>
				<DropDownPicker
					open={openDropDown}
					value={valueDropDown}
					items={itemsDropDown}
					setOpen={setOpenDropDown}
					setValue={setValueDropDown}
					setItems={setItemsDropDown}
					onChangeValue={(values) => {
						filterActivitiesByTags(values!);
					}}
					multiple
					mode="BADGE"
					placeholder="Filter Activities by tags"
					badgeDotColors={Colors.primary.normal}
					style={styles.input}
					placeholderStyle={styles.placeholder}
				/>
			</Box>
			<BottomSheet
				ref={bottomSheetRef}
				index={1}
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
						Activities
					</Text>
					{activities.length > 0 ? (
						<ScrollView style={{ width: '100%' }}>
							{activities.map((activity, index) => (
								<Box w="full" alignItems="center" key={activity.id}>
									{filterByActivity(activity.tags) && (
										<Pressable
											onPress={() => goToActivity(activity)}
											onLongPress={() => navToActivity(activity)}
											shadow={1}
											mb={index + 1 === activities.length ? '20' : 4}
										>
											<ActivityCard activity={activity} />
											{isActivityLiked(activity.id!) && (
												<Box
													position="absolute"
													left={3}
													top={3}
													rounded="full"
													bgColor="white"
													p={0.5}
													pt={1}
													px={1}
												>
													<HeartIcon size={30} color={Colors.like.like_error} />
												</Box>
											)}
										</Pressable>
									)}
								</Box>
							))}
						</ScrollView>
					) : (
						<EmptyList text={`There are no activities in this area.\nTry somewhere else.`} />
					)}
				</View>
			</BottomSheet>
		</>
	);
}

export default InputSearchContainer;
