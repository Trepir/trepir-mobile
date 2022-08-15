import React from 'react';
import { Pressable, Text } from 'native-base';
import Colors from '../../constants/Colors';

type Props = {
	text: string;
	pressFunction: (...args: any[]) => void;
	alignment: 'center' | 'flex-start' | 'flex-end';
};

function ButtonCustom({ text, pressFunction, alignment }: Props) {
	return (
		<Pressable
			onPress={pressFunction}
			bgColor={Colors.primary.normal}
			px={8}
			py={4}
			alignSelf={alignment}
			rounded="3xl"
		>
			<Text color="white" fontSize="md" fontWeight="semibold">
				{text}
			</Text>
		</Pressable>
	);
}

export default ButtonCustom;
