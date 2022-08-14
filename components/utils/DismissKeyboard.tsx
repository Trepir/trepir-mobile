import { View, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';

type Props = {
	children: JSX.Element;
};
export const DismissKeyboard = ({ children }: Props) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);
