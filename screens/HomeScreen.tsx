import { Box, View, Text, Pressable } from 'native-base';
import React, { useRef } from 'react';

// import * as SecureStore from 'expo-secure-store';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { HomePageScreenProps } from '../types';
import Login from '../navigation/Login';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import img from '../assets/images/homescreen_image.png';
import Logo from '../assets/icons/Logo';
import LogoName from '../assets/icons/LogoName';
import ButtonWide from '../components/ui/ButtonWide';
import Colors from '../constants/Colors';
import Register from '../navigation/Register';

const { height } = Dimensions.get('window');

const Style = StyleSheet.create({
	bottomNav: {
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 18,
		gap: 10,
	},
	image: {
		width: 1000,
		height: 1000,
		position: 'absolute',
	},
});
function HomeScreen({ navigation }: HomePageScreenProps<'HomeScreen'>) {
	const LoginRef = useRef<BottomSheetModal>(null);
	const RegisterRef = useRef<BottomSheetModal>(null);

	return (
		<View flex={1} justifyContent="center" alignItems="center" height={height}>
			<Image source={img} style={Style.image} blurRadius={5} />
			<View flex={1} justifyContent="center" alignItems="center">
				<Logo size={100} />
				<LogoName size={100} />
			</View>
			<View flex={0.35} justifyContent="center" alignItems="center" style={Style.bottomNav}>
				<Box marginBottom={3} width="100%">
					<ButtonWide
						text="Login with email"
						pressFunction={() => {
							LoginRef.current?.present();
						}}
					/>
				</Box>
				<Box marginBottom={3} width="100%">
					<ButtonWide
						text="Login with Google"
						pressFunction={() => {
							navigation.navigate('Login');
						}}
						google
					/>
				</Box>
				<Pressable
					onPress={() => {
						RegisterRef.current?.present();
					}}
				>
					<Text color={Colors.grey.medium} fontSize="sm" fontWeight="semibold" alignSelf="center">
						Not registered yet? Click here.
					</Text>
				</Pressable>
			</View>
			<Login reference={LoginRef} />
			<Register reference={RegisterRef} />
		</View>
	);
}

export default HomeScreen;
