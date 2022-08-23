import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

type Props = {};
const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: '100%',
	},
});
function MapViewActivity(props: Props) {
	return (
		<View>
			<MapView
				style={styles.map}
				ref={mapRef}
				onPress={() => bottomSheetRef.current?.snapToIndex(1)}
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
			>
				{filteredActivities.map((activityItem) => (
					<Marker
						key={activityItem.id}
						coordinate={{
							latitude: activityItem.location.latitude,
							longitude: activityItem.location.longitude,
						}}
					/>
				))}
			</MapView>
		</View>
	);
}

export default MapViewActivity;
