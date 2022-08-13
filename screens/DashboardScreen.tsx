import { View, Text } from 'native-base';
import React from 'react';

type Props = {};

const DashboardScreen = (props: Props) => {
	return (
		<View flex={1} justifyContent={'center'} alignItems={'center'}>
			<Text>DashboardScreen</Text>
		</View>
	);
};

export default DashboardScreen;
