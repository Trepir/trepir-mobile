/* eslint-disable react/require-default-props */
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, HStack } from 'native-base';
import React from 'react';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import Arrow from '../../assets/icons/Arrow';
import Colors from '../../constants/Colors';
import HeartIcon from '../../assets/icons/HeartIcon';

function TopViewActivity({
	title = 'ups there was an error',
	isActivity = false,
	openModal,
}: {
	title: string;
	isActivity?: boolean;
	openModal?: () => void;
}) {
	const navigation = useNavigation();

	return (
		<HStack
			zIndex={2}
			justifyContent="space-around"
			alignItems="center"
			backgroundColor={Colors.primary.dark}
			width="100%"
			style={{ paddingTop: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight + 14 }}
			pb={4}
		>
			<Pressable
				alignItems="center"
				width="10%"
				height="10"
				justifyContent="center"
				onPress={() => navigation.goBack()}
				style={{ transform: [{ scaleX: -1 }] }}
			>
				<Arrow size={13} color={Colors.white} />
			</Pressable>
			<Text
				color={Colors.white}
				flexShrink={1}
				pt={0.5}
				height="10"
				fontSize="2xl"
				fontWeight="bold"
				isTruncated
				textAlign="center"
			>
				{title}
			</Text>
			{isActivity ? (
				<Pressable
					alignItems="center"
					width="10%"
					height="10"
					alignSelf="center"
					rounded="3xl"
					justifyContent="center"
				>
					<HeartIcon size={24} color={Colors.white} />
				</Pressable>
			) : (
				<View width="10%" height="10" />
			)}
		</HStack>
	);
}

export default TopViewActivity;
