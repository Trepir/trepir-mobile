import { Box, View, Text, Pressable, VStack } from 'native-base';
import React, { useEffect, useRef } from 'react';

import * as SecureStore from 'expo-secure-store';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { HomePageScreenProps } from '../types';
import Login from '../modals/Login';
import Register from '../modals/Register';
// @ts-ignore
import img from '../assets/images/homescreen_image.png';
import Logo from '../assets/icons/Logo';
import LogoName from '../assets/icons/LogoName';
import ButtonWide from '../components/ui/ButtonWide';
import Colors from '../constants/Colors';
import { useAppDispatch } from '../app/hooks';
import { storeUser } from '../features/user/userSlice';
import { fetchUser } from '../services/user';

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
	const dispatch = useAppDispatch();
	const LoginRef = useRef<BottomSheetModal>(null);
	const RegisterRef = useRef<BottomSheetModal>(null);

	useEffect(() => {
		async function getUser() {
			const result = await SecureStore.getItemAsync('user');
			if (result) {
				try {
					const payload = await fetchUser(result);
					if (payload.data) {
						dispatch(storeUser(payload.data));
					} else {
						// SHOW ERROR ON THE SCREEN FIXME
						console.log('HomeScreen.tsx error:', payload.error);
					}
				} catch (error) {
					console.error(error);
				}
			}
		}
		getUser();
	}, []);

	return (
		<View flex={1} justifyContent="center" alignItems="center" height={height}>
			<Image source={img} style={Style.image} blurRadius={5} />
			<VStack flex={1} justifyContent="center" alignItems="center">
				<Logo size={100} />
				<LogoName size={100} />
			</VStack>
			<VStack flex={0.35} justifyContent="center" alignItems="center" style={Style.bottomNav}>
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
			</VStack>

			<Login reference={LoginRef} />

			<Register reference={RegisterRef} />
		</View>
	);
}

export default HomeScreen;
