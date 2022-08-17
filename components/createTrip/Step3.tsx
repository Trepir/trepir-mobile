import { View, Text } from 'native-base';
import React from 'react';

type Props = {
	// eslint-disable-next-line no-unused-vars
	jumpTo: (key: string) => void;
};

function Step3({ jumpTo }: Props) {
	return (
		<View>
			<Text>Step 3</Text>
		</View>
	);
}

export default Step3;
