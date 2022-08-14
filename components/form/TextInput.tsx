import { Input, Text } from 'native-base';
import React from 'react';
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ActivityFormControl } from '../../modals/AddActivityScreen';

type Props = {
	name: string;
	//This variables are form specif
	control: ActivityFormControl;
	errors: FieldErrorsImpl;
	placeholder: string;
	password?: boolean;
};

const TextInput = ({
	name,
	control, //Maybe put default values here
	errors,
	placeholder,
	password = false,
}: Props) => {
	return (
		<>
			<Text> {name.charAt(0).toUpperCase() + name.slice(1)}</Text>
			<Controller
				name={name as 'name'}
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						placeholder={placeholder}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						size="lg"
						type={password ? 'password' : 'text'}
					/>
				)}
			/>
			{errors[name] && <Text color={'error.600'}>This is required.</Text>}
		</>
	);
};

export default TextInput;
