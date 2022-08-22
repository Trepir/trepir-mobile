import { useNavigation } from '@react-navigation/native';
import { View, Image, AspectRatio, Heading } from 'native-base';
import React from 'react';
import ButtonCustom from '../components/ui/ButtonCustom';
import Colors from '../constants/Colors';
import { CreateStackScreenProps, RootStackScreenProps } from '../types';

// { navigation }: CreateStackScreenProps<'BeforeCreateTrip'>
function StartCTScreen({ navigation }: CreateStackScreenProps<'BeforeCreateTrip'>) {
	return (
		<View flex={1} bgColor={Colors.grey.offWhite} alignItems="center" justifyContent="center">
			<Heading textAlign="center" width="3/4" color={Colors.primary.normal}>
				Create your next great Trip
			</Heading>
			<AspectRatio
				ratio={{
					base: 1 / 1,
					md: 9 / 10,
				}}
				width="5/6"
				my={10}
			>
				<Image
					size="full"
					// eslint-disable-next-line global-require
					source={require('../assets/images/createTrip.png')}
					alt="Create Trip Start"
				/>
			</AspectRatio>
			<ButtonCustom
				alignment="center"
				text="Create a Trip"
				pressFunction={() => navigation.navigate('CreateTrip')}
			/>
		</View>
	);
}

export default StartCTScreen;
