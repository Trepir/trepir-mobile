import { View, Text, Image, Pressable } from 'native-base';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../../app/hooks';
import { storeNewAuth } from '../../features/auth/authSlice';
import Colors from '../../constants/Colors';

function TopView() {
	const dispatch = useAppDispatch();

	const handlePress = async () => {
		dispatch(storeNewAuth(null));
		try {
			await SecureStore.deleteItemAsync('user');
			const result = await SecureStore.getItemAsync('user');
			console.log(result);
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
			backgroundColor={Colors.white}
			width="100%"
			pt={9}
		>
			<View flex={0.1} />
			<View
				flex={0.8}
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
				backgroundColor={Colors.white}
			>
				<Image
					source={{
						uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
					}}
					alt="Danny DeVito"
					width={60}
					height={60}
					borderRadius={50}
				/>
				<Text fontSize="3xl" fontWeight="black" ml={3}>
					DeVittoz
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
				>
					<Text color="white" fontSize="md" fontWeight="semibold">
						Logout
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default TopView;
