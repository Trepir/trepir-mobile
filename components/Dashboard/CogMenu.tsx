/* eslint-disable react/no-unstable-nested-components */
import { Text, Box, Menu, Pressable } from 'native-base';
import React from 'react';
import CogIcon from '../../assets/icons/CogIcon';
import Colors from '../../constants/Colors';

function CogMenu({ callback, color }: { callback: () => void; color: string }) {
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
			>
				<Menu.Item borderRadius={4} alignSelf="center">
					Profile
				</Menu.Item>
				<Menu.Item textAlign="center" onPress={callback} bgColor="red.400" borderRadius={4}>
					<Text color={Colors.white} fontWeight="black">
						LOGOUT
					</Text>
				</Menu.Item>
			</Menu>
		</Box>
	);
}

export default CogMenu;
