import { StyleSheet } from 'react-native';

import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'native-base';

type Props = {
	actLatitude: number;
	actLongitude: number;
};
const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: '100%',
		borderRadius: 12,
	},
});
function MapViewActivity({ actLatitude, actLongitude }: Props) {
	return (
		<View h={200}>
			<MapView
				style={styles.map}
				showsUserLocation
				initialCamera={{
					center: {
						latitude: actLatitude,
						longitude: actLongitude,
					},
					altitude: 1000,
					pitch: 0,
					heading: 0,
					zoom: 14,
				}}
			>
				<Marker
					coordinate={{
						latitude: actLatitude,
						longitude: actLongitude,
					}}
				/>
			</MapView>
		</View>
	);
}

export default MapViewActivity;
