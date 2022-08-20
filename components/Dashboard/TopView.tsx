import { Text, Image, HStack } from 'native-base';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../../app/hooks';
import Colors from '../../constants/Colors';
import CogMenu from './CogMenu';
import { UserState } from '../../types';
import { clearUserState } from '../../features/user/userSlice';

function TopView({ user }: { user: UserState }) {
	const dispatch = useAppDispatch();

	const Logout = async () => {
		dispatch(clearUserState());
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
			{user.photoUrl.length > 0 && (
				<Image
					source={{
						uri: user.photoUrl,
					}}
					alt="Danny DeVito"
					width={60}
					height={60}
					borderRadius={50}
				/>
			)}

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
				{user.displayName}
			</Text>
			<CogMenu callback={Logout} color={Colors.white} />
		</HStack>
	);
}

export default TopView;
