import React, { useRef } from 'react';
import {
	GooglePlacesAutocomplete,
	GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import ApiKeys from '../../constants/ApiKeys';
import Colors from '../../constants/Colors';

type Props = {
	// eslint-disable-next-line no-unused-vars
	pressFunction: (data: any, details: any) => void;
	queryType: 'establishment' | ['(cities)', '(regions)'] | '(regions)';
	placeholder: string;
};

function GooglePlacesInput({ pressFunction, queryType, placeholder }: Props) {
	const GooglePlacesRef = useRef<GooglePlacesAutocompleteRef>(null);
	return (
		<GooglePlacesAutocomplete
			textInputProps={{
				// leftIcon: { type: 'font-awesome', name: 'chevron-left' },
				errorStyle: { color: 'red' },
				placeholderTextColor: '#a1a1a1',
			}}
			ref={GooglePlacesRef}
			placeholder={placeholder}
			onPress={(data, details) => pressFunction(data, details)}
			onFail={(error) => console.error(error)}
			query={{
				key: ApiKeys.googleMapsAPIKey,
				language: 'en',
				type: queryType,
			}}
			fetchDetails
			styles={{
				textInput: {
					height: 45,
					color: Colors.grey.dark,
					fontSize: 18,
					fontWeight: '400',
					borderColor: Colors.primary.normal,
					borderWidth: 2,
					borderRadius: 12,
				},
			}}
			disableScroll
			isRowScrollable={false}
		/>
	);
}

export default GooglePlacesInput;
