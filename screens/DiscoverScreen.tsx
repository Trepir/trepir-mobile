import MapView, { LatLng } from 'react-native-maps';
import React, { useRef } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Box, View } from 'native-base';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
// import { parseLocationDetails } from '../helpers/parseLocationDetails';

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

	const edgePaddingValue = 0;
	const edgePadding = {
		top: edgePaddingValue,
		right: edgePaddingValue,
		bottom: edgePaddingValue,
		left: edgePaddingValue,
	};

	const goToDestination = async (_: any, details: GooglePlaceDetail) => {
		// const locationData = parseLocationDetails(details);
		// CHECK IF IT RETURN THE VIEWPOINT FOR THE DELTAS TO MAKE IT LOOK GOOF
		// INCREASE ANIMATION TIME
		console.log(details.geometry.viewport.northeast, details.geometry.viewport.southwest);
		// mapRef.current?.animateToRegion({
		// 	latitude: locationData.latitude,
		// 	longitude: locationData.longitude,
		// 	latitudeDelta: 0.1,
		// 	longitudeDelta: 0.1,
		// });

		const viewPortNE: LatLng = {
			latitude: details.geometry.viewport.northeast.lat,
			longitude: details.geometry.viewport.northeast.lng,
		};
		const viewPortSW: LatLng = {
			latitude: details.geometry.viewport.southwest.lat,
			longitude: details.geometry.viewport.southwest.lng,
		};
		const camera = await mapRef.current?.getCamera();
		if (camera) {
			mapRef.current?.animateCamera(camera, { duration: 300 });
			mapRef.current?.fitToCoordinates([viewPortNE, viewPortSW], { edgePadding });
		}
	};

	return (
		<View style={styles.container} flex={1} alignItems="center" justifyContent="center">
			<MapView
				style={styles.map}
				ref={mapRef}
				initialCamera={{
					// Location of the user
					center: {
						latitude: 42,
						longitude: 0,
					},
					pitch: 0,
					heading: 0,
					altitude: 100000000000000000, // Check what te max is
					zoom: 0,
				}}
			/>
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
