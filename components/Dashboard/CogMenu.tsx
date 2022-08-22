/* eslint-disable react/no-unstable-nested-components */
import { Text, Box, Menu, Pressable } from 'native-base';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import CogIcon from '../../assets/icons/CogIcon';
import Colors from '../../constants/Colors';
import { useAppDispatch } from '../../app/hooks';

function CogMenu({ callback, color }: { callback: () => void; color: string }) {
	const dispatch = useAppDispatch();

	const themeChange = async () => {
		const result = await SecureStore.getItemAsync('DarkMode');
		if (result === 'light') await SecureStore.setItemAsync('theme', 'dark');
		else await SecureStore.setItemAsync('theme', 'light');
		dispath();
	};
	return (
		<Box position="absolute" bottom={7} right={8}>
			<Menu
				p={1}
				offset={40}
				crossOffset={-80}
				trigger={(triggerProps) => (
					<Pressable {...triggerProps}>
						<CogIcon size={25} color={color} />
					</Pressable>
				)}
				shadow={5}
			>
				<Menu.Item borderRadius={4} alignSelf="center" px={0} onPress={() => themeChange()}>
					🌘 Dark Mode
				</Menu.Item>
				<Menu.Item
					width="100%"
					onPress={callback}
					bgColor="red.400"
					borderRadius={4}
					alignSelf="center"
					alignItems="center"
				>
					<Text color="white" fontWeight="black">
						LOGOUT
					</Text>
				</Menu.Item>
			</Menu>
		</Box>
	);
}

export default CogMenu;
