import { View, Text } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';

function TagItem({ text, big = false }: { text: string; big: boolean }) {
	if (!big)
		return (
			<View
				bgColor={Colors.primary.softIconBackground}
				borderColor={Colors.primary.dark}
				borderWidth={1.5}
				borderRadius={12}
				px={1}
				pb={0.5}
			>
				<Text color={Colors.grey.dark} textAlign="center" fontSize="xs">
					{text}
				</Text>
			</View>
		);

	return (
		<View
			bgColor={Colors.primary.softIconBackground}
			borderColor={Colors.primary.dark}
			borderWidth={1.5}
			borderRadius={12}
			px={2}
			pb={0.5}
		>
			<Text color={Colors.grey.dark} textAlign="center" fontSize="md">
				{text}
			</Text>
		</View>
	);
}

export default TagItem;
