import React, { Ref, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { Pressable, View, Text } from 'native-base';

type Props = {
	bottomSheetRef: Ref<BottomSheet>;
};

function PickEventBS({ bottomSheetRef }: Props) {
	const snapPoints = useMemo(() => ['25%', '50%'], []);
	const navigation = useNavigation();

	return (
		<BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose>
			<View>
				<Text>CreateScreen</Text>
				<Pressable
					py={5}
					my={5}
					bgColor="amber.300"
					onPress={() => {
						navigation.navigate('NewTravelModal');
					}}
				>
					<Text>Add Travel Modal</Text>
				</Pressable>
				<Pressable
					py={5}
					my={5}
					bgColor="amber.300"
					onPress={() => {
						navigation.navigate('NewAccommodationModal');
					}}
				>
					<Text>Add Accommodation Modal</Text>
				</Pressable>
				<Pressable
					py={5}
					my={5}
					bgColor="amber.300"
					onPress={() => {
						navigation.navigate('NewActivityModal');
					}}
				>
					<Text>Add Activity Modal</Text>
				</Pressable>
			</View>
		</BottomSheet>
	);
}

export default PickEventBS;
