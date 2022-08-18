import React from 'react';
import { Box, Text } from 'native-base';

type Props = {
	text: string;
};

function EmptyList({ text }: Props) {
	return (
		<Box height="180" width="full" alignItems="center" justifyContent="center">
			<Text position="absolute">{text}</Text>
		</Box>
	);
}

export default EmptyList;