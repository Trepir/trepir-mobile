import { Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Control, Controller, FieldErrorsImpl, UseFormSetValue } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../../constants/Colors';

type Props = {
	name: string;
	control: Control<any>;
	errors: FieldErrorsImpl;
	placeholder: string;
	setValue: UseFormSetValue<any>;
	dropDownItems: { label: string; value: string }[];
	min: number;
	max: number;
};

const styles = StyleSheet.create({
	input: {
		borderColor: Colors.primary.normal,
		borderWidth: 2,
		borderRadius: 15,
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
	dropDownItems,
	min,
	max,
}: Props) {
	const [openDropDown, setOpenDropDown] = useState(false);
	const [valueDropDown, setValueDropDown] = useState([]);
	const [itemsDropDown, setItemsDropDown] = useState(dropDownItems);

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
						min={min}
						max={max}
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
