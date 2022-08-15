import { Factory, HStack, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form';
import { Keyboard, TextInput, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { ActivityFormControl } from '../../modals/AddActivityScreen';
import InputLabel from '../ui/InputLabel';

type Props = {
	name: string;
	//This variables are form specif
	control: ActivityFormControl;
	errors: FieldErrorsImpl;
	placeholder: string;
};
//WORKING FOR NOW HAVE TO  CHECK THE FORM
const NumberInput = ({
	name,
	control, //Maybe put default values here
	errors,
	placeholder,
}: Props) => {
	const [duration, setDuration] = useState('');

	// const FactoryTextInput = Factory(TextInput);

	return (
		<>
			<InputLabel labelText={name.charAt(0).toUpperCase() + name.slice(1)} />
			<Controller
				name={name as 'name'}
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<HStack alignItems={'center'}>
						<Text fontSize={'md'} mr={2}>
							Hours it takes to do:{' '}
						</Text>
						<TextInput
							style={styles.numberInput}
							keyboardType="number-pad"
							maxLength={2}
							value={duration}
							placeholder={placeholder}
							placeholderTextColor="#c1c1c1"
							onChangeText={(text) => {
								if (text.length <= 1) {
									setDuration(text);
									onChange(+text);
								} else if (+text[0] < 3 && +text[1] < 5) {
									setDuration(text);
									onChange(+text);
								}
							}}
						/>
					</HStack>
				)}
			/>
			{errors[name] && <Text color={'error.600'}>This is required.</Text>}
		</>
	);
};

export default NumberInput;

const styles = StyleSheet.create({
	numberInput: {
		backgroundColor: 'white',
		width: '33%',
		height: 36,
		borderColor: Colors.primary.normal,
		borderWidth: 2,
		borderRadius: 10,
		textAlign: 'center',
	},
});
