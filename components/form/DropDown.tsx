import { Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Controller, FieldErrorsImpl, UseFormSetValue } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../../constants/Colors';
import { ActivityFormControl } from '../../modals/AddActivityScreen';
import { Location } from '../../types';

type Props = {
	name: string;
	control: ActivityFormControl;
	errors: FieldErrorsImpl;
	placeholder: string;
	setValue: UseFormSetValue<{
		name: string;
		duration: number;
		description: string;
		timeStart: number;
		timeEnd: number;
		tags: string[];
		location: Location;
	}>;
};

const styles = StyleSheet.create({
	input: {
		borderColor: Colors.primary.normal,
		borderWidth: 2,
	},
	placeholder: {
		color: '#c1c1c1',
		fontWeight: '600',
	},
});

function DropDown({
	name,
	control, // Maybe put default values here
	errors,
	placeholder,
	setValue,
}: Props) {
	const [openDropDown, setOpenDropDown] = useState(false);
	const [valueDropDown, setValueDropDown] = useState([]);
	const [itemsDropDown, setItemsDropDown] = useState([
		{ label: 'Apple', value: 'apple' },
		{ label: 'Banana', value: 'banana' },
		{ label: 'Orange', value: 'orange' },
		{ label: 'Peach', value: 'peach' },
	]);

	useEffect(() => {
		setValue('tags', valueDropDown);
	}, [valueDropDown, setValue]);

	return (
		<>
			<Controller
				name={name as 'name'}
				control={control}
				rules={{
					required: true,
					validate: (value) => {
						if (value.length > 0 && value.length < 4) return true;
						return false;
					},
				}}
				render={() => (
					<DropDownPicker
						open={openDropDown}
						value={valueDropDown}
						items={itemsDropDown}
						setOpen={setOpenDropDown}
						setValue={setValueDropDown}
						setItems={setItemsDropDown}
						multiple
						min={1}
						max={3}
						mode="BADGE"
						placeholder={placeholder}
						badgeDotColors={Colors.primary.normal}
						style={styles.input}
						placeholderStyle={styles.placeholder}
					/>
				)}
			/>
			{errors[name] && <Text color="error.600">This is required.</Text>}
		</>
	);
}

export default DropDown;
