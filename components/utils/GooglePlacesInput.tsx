import React, { useRef } from 'react';
import {
	GooglePlacesAutocomplete,
	GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import ApiKeys from '../../constants/ApiKeys';

type Props = {
	// eslint-disable-next-line no-unused-vars
	pressFunction: (data: any, details: any) => void;
	queryType: 'establishment' | ['(cities)', '(regions)'];
	placeholder: string;
};

function GooglePlacesInput({ pressFunction, queryType, placeholder }: Props) {
	const GooglePlacesRef = useRef<GooglePlacesAutocompleteRef>(null);
	return (
		<GooglePlacesAutocomplete
			textInputProps={{
				// leftIcon: { type: 'font-awesome', name: 'chevron-left' },
				errorStyle: { color: 'red' },
				placeholderTextColor: '#c1c1c1',
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
					height: 38,
					color: '#5d5d5d',
					fontSize: 16,
					borderColor: '#d6d3d1',
					borderWidth: 1,
				},
			}}
		/>
	);
}

export default GooglePlacesInput;
