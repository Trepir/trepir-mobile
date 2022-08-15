import { Text, TextArea } from 'native-base';
import React from 'react';
import { Controller, FieldErrorsImpl } from 'react-hook-form';
import Colors from '../../constants/Colors';
import { ActivityFormControl } from '../../modals/AddActivityScreen';
import InputLabel from '../ui/InputLabel';

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
			<InputLabel labelText={name.charAt(0).toUpperCase() + name.slice(1)} />
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
						placeholder={placeholder}
						size="xl"
						bgColor={'white'}
						borderColor={Colors.primary.normal}
						borderWidth={'2'}
						rounded={'xl'}
						h={120}
						_focus={{ borderColor: Colors.primary.light }}
					/>
				)}
			/>
			{errors[name] && <Text color={'error.600'}>This is required.</Text>}
		</>
	);
};

export default TextAreaInput;
