import React from 'react';
import { Pressable, Text, View } from 'native-base';
import Colors from '../../constants/Colors';
import GoogleIcon from '../../assets/icons/GoogleIcon';

type Props = {
	text: string;
	// eslint-disable-next-line no-unused-vars
	pressFunction: (...args: any[]) => void;
	google?: boolean;
};

function ButtonWide({ text, pressFunction, google = false }: Props) {
	const pSize = google ? 3 : 3;
	return (
		<Pressable
			onPress={pressFunction}
			bgColor={Colors.primary.normal}
			width="80%"
			px={12}
			py={pSize}
			alignSelf="center"
			rounded="3xl"
			flexDirection="row"
			justifyContent="center"
		>
			<Text color="white" fontSize="2xl" fontWeight="semibold" alignSelf="center">
				{text}
			</Text>
			{google && (
				<View marginLeft={4} backgroundColor="white" borderRadius={8} p={2}>
					<GoogleIcon size={24} />
				</View>
			)}
		</Pressable>
	);
}

ButtonWide.defaultProps = {
	google: false,
};

export default ButtonWide;
