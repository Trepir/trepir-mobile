import { View, Text, Image, Pressable, Center } from 'native-base';
import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../../app/hooks';
import { storeNewAuth } from '../../features/auth/authSlice';
import Colors from '../../constants/Colors';

type User = {
	userName: string;
	photo: string;
};

function TopView({ user }: { user: User }) {
	const dispatch = useAppDispatch();

	const handlePress = async () => {
		dispatch(storeNewAuth(null));
		try {
			await SecureStore.deleteItemAsync('user');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View
			flex={0.15}
			flexDirection="row"
			justifyContent="space-around"
			alignItems="center"
			backgroundColor={Colors.primary.dark}
			width="100%"
			pt={9}
			mb={0.5}
			shadow={1}
		>
			<View flex={0.1} />
			<View
				flex={0.8}
				// pl={10}
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
				backgroundColor={Colors.primary.dark}
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
					ml={3}
					isTruncated
					textAlign="center"
				>
					{user.userName}
				</Text>
			</View>
			<View flex={0.25} mr={8}>
				<Pressable
					onPress={handlePress}
					bgColor={Colors.primary.normal}
					px={4}
					py={2}
					alignSelf="center"
					rounded="3xl"
					shadow={1}
				>
					<Text color="white" fontSize="md" fontWeight="bold">
						Logout
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default TopView;
