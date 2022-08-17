import MapView from 'react-native-maps';
import React, { useRef } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Box, View } from 'native-base';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { parseLocationDetails } from '../helpers/parseLocationDetails';
import { async } from '@firebase/util';

// type Props = {};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
function DiscoverScreen() {
	const mapRef = useRef<MapView>(null);

	const goToDestination = async (_: any, details: GooglePlaceDetail) => {
		const locationData = parseLocationDetails(details);
		// CHECK IF IT RETURN THE VIEWPOINT FOR THE DELTAS TO MAKE IT LOOK GOOF
		// INCREASE ANIMATION TIME
		mapRef.current?.animateToRegion({
			latitude: locationData.latitude,
			longitude: locationData.longitude,
			latitudeDelta: 0.1,
			longitudeDelta: 0.1,
		});
	};
	const dispatch = useAppDispatch();
	const handlePress = async () => {
		dispatch(storeNewAuth({ token: null }));
		try {
			await SecureStore.deleteItemAsync('user');
			const result = await SecureStore.getItemAsync('user');
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<View style={styles.container} flex={1} alignItems="center" justifyContent="center">
			<MapView style={styles.map} ref={mapRef} />
			<Box position="absolute" zIndex={5} width="80%">
				<GooglePlacesInput
					queryType={['(cities)', '(regions)']}
					placeholder="Start discovering Activities"
					pressFunction={goToDestination}
				/>
			</Box>
		</View>
	);
}

export default DiscoverScreen;
