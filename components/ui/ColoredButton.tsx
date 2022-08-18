import React from 'react';
import { Pressable, Text } from 'native-base';
import Colors from '../../constants/Colors';

type Props = {
	text: string;
	// eslint-disable-next-line no-unused-vars
	pressFunction: (...args: any[]) => void;
	alignment: 'center' | 'flex-start' | 'flex-end';
	color: string;
	isWide: boolean;
};

function ColoredButton({ text, pressFunction, alignment, color, isWide }: Props) {
	return (
		<Pressable
			onPress={pressFunction}
			bgColor={color}
			px={8}
			py={4}
			alignSelf={alignment}
			rounded="3xl"
			width={isWide ? '80%' : ''}
			alignItems={isWide ? 'center' : ''}
		>
			<Text color="white" fontSize="md" fontWeight="semibold">
				{text}
			</Text>
		</Pressable>
	);
}

export default ColoredButton;
