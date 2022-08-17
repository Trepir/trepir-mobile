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

function TopView() {
	const dispatch = useAppDispatch();

	const [photo, setPhoto] = useState<User['photo']>(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg'
	);
	const [userName, setUserName] = useState<User['userName']>('DeVittozz');

	// WHEN A USER IS CREATED AND STORED IN REDUX, THIS FUNCTION IS CALLED
	// useEffect(() => {
	// 	const user: user = dispatch(hereWeGetTheUser);
	// 	setPhoto(user.photo);
	// 	setUserName(user.userName);
	// }, []);

	const handlePress = async () => {
		dispatch(storeNewAuth(null));
		try {
			await SecureStore.deleteItemAsync('user');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Center
			flex={0.15}
			flexDirection="row"
			justifyContent="space-around"
			alignItems="center"
			backgroundColor={Colors.white}
			width="100%"
			pt={9}
			shadow={1}
		>
			{/* <View flex={0.1} /> */}
			<View
				flex={0.8}
				pl={10}
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
				backgroundColor={Colors.white}
			>
				<Image
					source={{
						uri: photo,
					}}
					alt="Danny DeVito"
					width={60}
					height={60}
					borderRadius={50}
				/>
				<Text fontSize="3xl" fontWeight="black" ml={3}>
					{userName}
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
					<Text color="white" fontSize="md" fontWeight="semibold">
						Logout
					</Text>
				</Pressable>
			</View>
		</Center>
	);
}

export default TopView;
