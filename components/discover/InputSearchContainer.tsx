import React, { Ref, useMemo, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Constants from 'expo-constants';
import { Box, Pressable, ScrollView, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import BottomSheet from '@gorhom/bottom-sheet';
import { ActivityTags } from '../../constants/ActivityTags';
import GooglePlacesInput from '../utils/GooglePlacesInput';
import Colors from '../../constants/Colors';
import { ActivityEvent } from '../../types';
import ActivityCard from '../ui/ActivityCard';

const styles = StyleSheet.create({
	input: {
		borderColor: Colors.primary.normal,
		borderWidth: 2,
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
};

function InputSearchContainer({ goToDestination, bottomSheetRef, activities }: Props) {
	const [openDropDown, setOpenDropDown] = useState(false);
	const [valueDropDown, setValueDropDown] = useState<string[]>([]);
	const [itemsDropDown, setItemsDropDown] = useState(ActivityTags);

	const snapPoints = useMemo(() => ['10%', '30%', '50%'], []);

	const filterByActivity = (tags: string[]) =>
		valueDropDown.length === 0 ? true : tags.some((tag) => valueDropDown.includes(tag));

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
					multiple
					mode="BADGE"
					placeholder="Filter Activities by tags"
					badgeDotColors={Colors.primary.normal}
					style={styles.input}
					placeholderStyle={styles.placeholder}
				/>
			</Box>
			<BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
				<View alignItems="center">
					<Text fontSize="xl" fontWeight="medium" mb={2}>
						Activities
					</Text>
					<ScrollView w="full">
						{activities.map((activity, index) => (
							<Box w="full" alignItems="center" key={activity.id}>
								{filterByActivity(activity.tags) && (
									<Pressable
										// onPress={() => addActivityToDay(activity)}
										shadow={1}
										mb={index + 1 === activities.length ? '20' : 4}
									>
										<ActivityCard activity={activity} />
									</Pressable>
								)}
							</Box>
						))}
					</ScrollView>
				</View>
			</BottomSheet>
		</>
	);
}

export default InputSearchContainer;
