import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { Location } from '../types';

export const parseLocationDetails = (details: GooglePlaceDetail) => {
	let country = '';
	let state = '';
	let city = '';

	details?.address_components.forEach((comp: any) => {
		if (comp.types.includes('country')) {
			country = comp.long_name;
		}
		if (comp.types.includes('administrative_area_level_1')) {
			state = comp.long_name;
		}
		if (comp.types.includes('administrative_area_level_2')) {
			city = comp.long_name;
		}
	});
	// console.log(data, details);
	const locData: Location = {
		latitude: details?.geometry.location.lat,
		longitude: details?.geometry.location.lng,
		locationName: details?.name,
		googleId: details?.place_id,
		country,
		state,
		city,
	};
	return locData;
};
