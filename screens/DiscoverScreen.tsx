import MapView, { LatLng } from 'react-native-maps';
import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Box, View } from 'native-base';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import BottomSheet from '@gorhom/bottom-sheet';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import Colors from '../constants/Colors';
import InputSearchContainer from '../components/discover/InputSearchContainer';
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
	input: {
		borderColor: Colors.primary.normal,
		borderWidth: 2,
	},
	placeholder: {
		color: '#c1c1c1',
		fontWeight: '600',
	},
});
const edgePaddingValue = 0;
const edgePadding = {
	top: edgePaddingValue,
	right: edgePaddingValue,
	bottom: edgePaddingValue,
	left: edgePaddingValue,
};
function DiscoverScreen() {
	const [startedSearch, setStartedSearch] = useState(false);

	const mapRef = useRef<MapView>(null);
	const bottomSheetRef = useRef<BottomSheet>(null);

	const goToDestination = async (_: any, details: GooglePlaceDetail) => {
		console.log(details.geometry.viewport.northeast, details.geometry.viewport.southwest);

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
			setStartedSearch(true);
			bottomSheetRef.current?.snapToIndex(1);
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

			{!startedSearch ? (
				<Box position="absolute" zIndex={5} width="80%">
					<GooglePlacesInput
						queryType={['(cities)', '(regions)']}
						placeholder="Start discovering Activities"
						pressFunction={goToDestination}
					/>
				</Box>
			) : (
				<InputSearchContainer goToDestination={goToDestination} bottomSheetRef={bottomSheetRef} />
			)}
		</View>
	);
}

export default DiscoverScreen;
