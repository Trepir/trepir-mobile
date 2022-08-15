import { Input, Text } from 'native-base';
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

const TextInput = ({
	name,
	control, //Maybe put default values here
	errors,
	placeholder,
	password = false,
}: Props) => {
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
					<Input
						placeholder={placeholder}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						size="xl"
						bgColor={'white'}
						borderColor={Colors.primary.normal}
						borderWidth={'2'}
						rounded={'xl'}
						_focus={{ borderColor: Colors.primary.light }}
						type={password ? 'password' : 'text'}
					/>
				)}
			/>
			{errors[name] && <Text color={'error.600'}>This is required.</Text>}
		</>
	);
};

export default TextInput;
