import MapView, { LatLng, Marker } from 'react-native-maps';
import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Box, View } from 'native-base';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import BottomSheet from '@gorhom/bottom-sheet';
import GooglePlacesInput from '../components/utils/GooglePlacesInput';
import Colors from '../constants/Colors';
import InputSearchContainer from '../components/discover/InputSearchContainer';
import { ActivityEvent, Viewport } from '../types';
import { activitiesFromViewport } from '../services/DiscoverService';
import { ValueType } from 'react-native-dropdown-picker';
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
	const [activitiesFromLocation, setActivitiesFromLocation] = useState<ActivityEvent[]>([]);
	const [filteredActivities, setFilteredActivities] = useState<ActivityEvent[]>([]);
	const filterActivitiesByTags = (tagsFilter: ValueType[]) => {
		if (tagsFilter.length === 0) {
			setFilteredActivities(activitiesFromLocation);
		} else {
			setFilteredActivities(
				filteredActivities.filter(({ tags }) => tags.some((tag) => tagsFilter.includes(tag)))
			);
		}
	};

	const mapRef = useRef<MapView>(null);
	const bottomSheetRef = useRef<BottomSheet>(null);

	const getActivitiesFromLocation = async (details: GooglePlaceDetail) => {
		try {
			const viewport: Viewport = {
				latitudeHigh: details.geometry.viewport.northeast.lat,
				latitudeLow: details.geometry.viewport.southwest.lat,
				longitudeHigh: details.geometry.viewport.northeast.lng,
				longitudeLow: details.geometry.viewport.southwest.lng,
			};

			const activities = await activitiesFromViewport(viewport);
			// HAVE TO FILTER HERE
			setFilteredActivities([...activities.data!]);
			setActivitiesFromLocation([...activities.data!]);
		} catch (error) {
			console.error(error);
		}
	};

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
			await getActivitiesFromLocation(details);
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

			{!startedSearch ? (
				<Box position="absolute" zIndex={5} width="80%">
					<GooglePlacesInput
						queryType={['(cities)', '(regions)']}
						placeholder="Start discovering Activities"
						pressFunction={goToDestination}
					/>
				</Box>
			) : (
				<InputSearchContainer
					goToDestination={goToDestination}
					bottomSheetRef={bottomSheetRef}
					activities={activitiesFromLocation}
					filterActivitiesByTags={filterActivitiesByTags}
				/>
			)}
		</View>
	);
}

export default DiscoverScreen;
