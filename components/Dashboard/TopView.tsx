import { Text, Image, HStack } from 'native-base';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../../app/hooks';
import { storeNewAuth } from '../../features/auth/authSlice';
import Colors from '../../constants/Colors';
import CogMenu from './CogMenu';

type User = {
	userName: string;
	photo: string;
};

function TopView({ user }: { user: User }) {
	const dispatch = useAppDispatch();

	const Logout = async () => {
		dispatch(storeNewAuth(null));
		try {
			await SecureStore.deleteItemAsync('user');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<HStack
			flexDirection="row"
			justifyContent="center"
			alignItems="center"
			backgroundColor={Colors.primary.dark}
			width="100%"
			pt={16}
			pb={3}
			pr={2}
			shadow={3}
			zIndex={2}
		>
			<Image
				source={{
					uri: user.photo,
				}}
				alt="Danny DeVito"
				width={60}
				height={60}
				borderRadius={50}
			/>
			<Text
				color={Colors.white}
				noOfLines={2}
				flexShrink={1}
				fontSize="3xl"
				fontWeight="bold"
				ml={4}
				isTruncated
				textAlign="center"
			>
				{user.userName}
			</Text>
			<CogMenu callback={Logout} color={Colors.white} />
		</HStack>
	);
}

export default TopView;
