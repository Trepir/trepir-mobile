import { Input, Text } from 'native-base';
import React from 'react';
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form';
import Colors from '../../constants/Colors';
import InputLabel from '../ui/InputLabel';

type Props = {
	name: string;
	// This variables are form specif
	control: Control<any>;
	errors: FieldErrorsImpl;
	placeholder: string;
	password?: boolean;
	isRequired?: boolean;
	errorMargin?: boolean;
};

function TextInput({
	name,
	control, // Maybe put default values here
	errors,
	placeholder,
	password = false,
	isRequired = true,
	errorMargin = false,
}: Props) {
	return (
		<>
			<InputLabel labelText={name.charAt(0).toUpperCase() + name.slice(1)} />
			<Controller
				name={name as 'name'}
				control={control}
				rules={{
					required: isRequired,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						placeholder={placeholder}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						size="xl"
						bgColor="white"
						borderColor={Colors.primary.normal}
						borderWidth="2"
						rounded="xl"
						_focus={{ borderColor: Colors.primary.light }}
						type={password ? 'password' : 'text'}
					/>
				)}
			/>
			{errors[name] && (
				<Text color="error.600" mb={errorMargin ? 4 : 0}>
					This is required.
				</Text>
			)}
		</>
	);
}

TextInput.defaultProps = {
	password: false,
	isRequired: true,
	errorMargin: false,
};

export default TextInput;
