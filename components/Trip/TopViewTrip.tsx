import { useNavigation } from '@react-navigation/native';
import { Text, Pressable, HStack } from 'native-base';
import React from 'react';
import Constants from 'expo-constants';
import AddIcon from '../../assets/icons/AddIcon';
import Arrow from '../../assets/icons/Arrow';
import Colors from '../../constants/Colors';

function TopViewTrip({ title = 'ups', callback }: { title: string; callback: () => void }) {
	const navigation = useNavigation();

	return (
		<HStack
			zIndex={2}
			justifyContent="space-around"
			alignItems="center"
			backgroundColor={Colors.primary.dark}
			width="100%"
			pt={Constants.statusBarHeight + 10}
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
				// width="70%"
				color={Colors.white}
				flexShrink={1}
				fontSize="2xl"
				fontWeight="bold"
				isTruncated
				textAlign="center"
			>
				{title}
			</Text>
			<Pressable alignItems="center" width="8%" onPress={callback} alignSelf="center" rounded="3xl">
				<AddIcon size={36} color={Colors.primary.light} />
			</Pressable>
		</HStack>
	);
}

export default TopViewTrip;
