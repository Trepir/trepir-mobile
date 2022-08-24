import { StyleSheet } from 'react-native';

import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'native-base';

type Props = {
	actLatitude: number;
	actLongitude: number;
	extraLatitude?: number;
	extraLongitude?: number;
};
const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: '100%',
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
	},
});
function MapViewActivity({
	actLatitude,
	actLongitude,
	extraLatitude = 0,
	extraLongitude = 0,
}: Props) {
	const twoPoints = !(extraLatitude === 0 && extraLongitude === 0);
	const centerLatitude = twoPoints ? (actLatitude + extraLatitude) / 2 : actLatitude;
	const centerLongitude = twoPoints ? (actLongitude + extraLongitude) / 2 : actLongitude;

	return (
		<View h={350}>
			<MapView
				style={styles.map}
				showsUserLocation
				initialRegion={{
					latitude: centerLatitude,
					longitude: centerLongitude,
					latitudeDelta: twoPoints ? Math.abs(actLatitude - extraLatitude) * 2 : 0.02,
					longitudeDelta: twoPoints ? Math.abs(actLongitude - extraLongitude) * 2 : 0.02,
				}}
			>
				<Marker
					coordinate={{
						latitude: actLatitude,
						longitude: actLongitude,
					}}
				/>
				{twoPoints && (
					<Marker
						coordinate={{
							latitude: extraLatitude,
							longitude: extraLongitude,
						}}
					/>
				)}
			</MapView>
		</View>
	);
}

export default MapViewActivity;
