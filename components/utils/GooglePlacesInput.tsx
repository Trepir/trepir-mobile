import React, { useRef } from 'react';
import {
	GooglePlacesAutocomplete,
	GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { View } from 'native-base';

const GooglePlacesInput = ({}) => {
	const GooglePlacesRef = useRef<GooglePlacesAutocompleteRef>(null);
	return (
		<View position={'absolute'} width={'100%'} alignSelf={'center'} zIndex={2} mt={12}>
			<GooglePlacesAutocomplete
				textInputProps={{
					// leftIcon: { type: 'font-awesome', name: 'chevron-left' },
					errorStyle: { color: 'red' },
				}}
				ref={GooglePlacesRef}
				placeholder="Add a Location..."
				onPress={(data, details) => {
					// console.log(details);
					// if (GooglePlacesRef.current !== null) {
					// 	GooglePlacesRef.current.setAddressText('');
					// }
				}}
				onFail={(error) => console.error(error)}
				query={{
					key: 'AIzaSyDzxriUNVcBOw_5cRbcVJKRz2xL9jpfbOA',
					language: 'en',
					// type: ['(cities)', '(regions)'],
					type: 'establishment',
				}}
				fetchDetails={true}
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
		</View>
	);
};

export default GooglePlacesInput;
