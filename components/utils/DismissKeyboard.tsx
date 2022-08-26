import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

type Props = {
	children: JSX.Element;
};
export function DismissKeyboard({ children }: Props) {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{children}
		</TouchableWithoutFeedback>
	);
}
