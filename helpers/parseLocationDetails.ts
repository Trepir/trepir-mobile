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

	// @ts-ignore
	const imgReference = details.photos[0].photo_reference;
	// @ts-ignore
	const imgWidth = details.photos[0].width;
	const imgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${imgWidth}&photoreference=${imgReference}&key=${ApiKeys.googleMapsAPIKey}`;

	const locationData: Location = {
		googleId: details.place_id,
		latitude: details.geometry.location.lat,
		longitude: details.geometry.location.lng,
		photoUrl: [imgUrl],
		formattedAddress: details.formatted_address,
		locationName: details.name,
		country,
		state,
		city,
	};
	return locationData;
};
