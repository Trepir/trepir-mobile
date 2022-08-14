import { Text, TextArea } from 'native-base';
import React from 'react';
import { Controller, FieldErrorsImpl } from 'react-hook-form';
import { ActivityFormControl } from '../../modals/AddActivityScreen';

type Props = {
	name: string;
	//This variables are form specif
	control: ActivityFormControl;
	errors: FieldErrorsImpl;
	placeholder: string;
	password?: boolean;
};

const TextAreaInput = ({ name, control, errors, placeholder }: Props) => {
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
					//CANT TELL WHAT THIS ERROR IS SAYING
					// @ts-ignore
					<TextArea
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						size="lg"
						placeholder={placeholder}
					/>
				)}
			/>
			{errors[name] && <Text color={'error.600'}>This is required.</Text>}
		</>
	);
};

export default TextAreaInput;
