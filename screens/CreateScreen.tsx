import { View, Text } from 'native-base';
import React from 'react';

type Props = {};

const CreateScreen = (props: Props) => {
	return (
		<View flex={1} justifyContent={'center'} alignItems={'center'}>
			<Text>CreateScreen</Text>
		</View>
	);
};

export default CreateScreen;
