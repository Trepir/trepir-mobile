import React, { Ref, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { View, Heading, Box } from 'native-base';
import ColoredButton from '../ui/ColoredButton';

type Props = {
	bottomSheetRef: Ref<BottomSheet>;
};

function PickEventBS({ bottomSheetRef }: Props) {
	const snapPoints = useMemo(() => ['80%'], []);
	const navigation = useNavigation();

	return (
		<BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose>
			<View>
				<Heading alignSelf="center" mb={6}>
					What would you like to add?
				</Heading>
				<Box my={2}>
					<ColoredButton
						text="Add an Activity"
						color="amber.400"
						pressFunction={() => navigation.navigate('NewActivityModal')}
						alignment="center"
						isWide
					/>
				</Box>
				<Box my={2}>
					<ColoredButton
						text="Add a Travel"
						color="blue.500"
						pressFunction={() => navigation.navigate('NewTravelModal')}
						alignment="center"
						isWide
					/>
				</Box>
				<Box my={2}>
					<ColoredButton
						text="Add an Accommodation"
						color="red.500"
						pressFunction={() => navigation.navigate('NewAccommodationModal')}
						alignment="center"
						isWide
					/>
				</Box>
			</View>
		</BottomSheet>
	);
}

export default PickEventBS;
