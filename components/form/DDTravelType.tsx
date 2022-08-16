import { Text } from 'native-base';
import React, { useState } from 'react';
import { Control, Controller, FieldErrorsImpl, UseFormSetValue } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../../constants/Colors';

type DropDownItems = {
	label: string;
	value: string;
};
type Props = {
	name: string;
	control: Control<any>;
	errors: FieldErrorsImpl;
	placeholder: string;
	setValue: UseFormSetValue<any>;
	dropDownItems: DropDownItems[];
	min: number;
	max: number;
	// eslint-disable-next-line no-unused-vars
	trackValue: (value: string) => void;
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

function DDTravelType({
	name,
	control, // Maybe put default values here
	errors,
	placeholder,
	setValue,
	dropDownItems,
	min,
	max,
	trackValue,
}: Props) {
	const [openDropDown, setOpenDropDown] = useState(false);
	const [valueDropDown, setValueDropDown] = useState<string[]>([]);
	const [itemsDropDown, setItemsDropDown] = useState(dropDownItems);
	return (
		<>
			<Controller
				name={name as 'name'}
				control={control}
				rules={{
					required: true,
					validate: (value) => {
						if (value) return true;
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
						onSelectItem={(item) => {
							if (item) {
								setValue('type', item[0].value);
								trackValue(item[0].value as string);
							}
							setOpenDropDown(false);
						}}
						onOpen={() => {
							setValueDropDown([]);
						}}
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

export default DDTravelType;
