import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, HStack } from 'native-base';
import React from 'react';
import Constants from 'expo-constants';
import Arrow from '../../assets/icons/Arrow';
import Colors from '../../constants/Colors';

function TopViewActivity({ title = 'ups there was an error' }: { title: string }) {
	const navigation = useNavigation();

	return (
		<HStack
			zIndex={2}
			justifyContent="space-around"
			alignItems="center"
			backgroundColor={Colors.primary.dark}
			width="100%"
			pt={Constants.statusBarHeight + 14}
			pb={4}
		>
			<Pressable
				alignItems="center"
				width="8%"
				onPress={() => navigation.goBack()}
				style={{ transform: [{ scaleX: -1 }] }}
			>
				<Arrow size={13} color={Colors.white} />
			</Pressable>
			<Text
				color={Colors.white}
				width="60%"
				flexShrink={1}
				fontSize="2xl"
				fontWeight="bold"
				isTruncated
				textAlign="center"
			>
				{title}
			</Text>
			<View width="8%" />
			{/* <Pressable alignItems="center" width="8%" onPress={callback} alignSelf="center" rounded="3xl">
				<AddIcon size={36} color={Colors.primary.light} />
			</Pressable> */}
		</HStack>
	);
}

export default TopViewActivity;
