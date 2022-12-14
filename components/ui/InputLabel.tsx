import { Text } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';

type Props = {
	labelText: string;
};

function InputLabel({ labelText }: Props) {
	return (
		<Text color={Colors.primary.dark} fontSize="md" fontWeight="medium" my={2}>
			{labelText}
		</Text>
	);
}

export default InputLabel;
