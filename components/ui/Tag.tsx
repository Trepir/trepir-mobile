import { View, Text } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';

function TagItem({ text }: { text: string }) {
	return (
		<View
			bgColor={Colors.primary.softIconBackground}
			borderColor={Colors.primary.dark}
			borderWidth={1.5}
			borderRadius={12}
			px={1}
		>
			<Text color={Colors.grey.dark} textAlign="center" fontSize="xs">
				{text}
			</Text>
		</View>
	);
}

export default TagItem;
