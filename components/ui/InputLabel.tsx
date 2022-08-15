import { Text } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';

type Props = {
	labelText: string;
};

const InputLabel = ({ labelText }: Props) => {
	return (
		<Text color={Colors.primary.inputLabel} fontSize={'md'} fontWeight={'medium'} my={2}>
			{labelText}
		</Text>
	);
};

export default InputLabel;
