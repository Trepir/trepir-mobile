import { View } from 'native-base';
import React, { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useAppSelector } from '../app/hooks';
import EventAccommodationInfo from '../components/activity/EventAccommodationInfo';
import EventActivityInfo from '../components/activity/EventActivityInfo';
import EventTravelInfo from '../components/activity/EventTravelInfo';
import LikeActivityModal from '../components/activity/LikeActivityModal';
import TopViewActivity from '../components/activity/TopViewActivity';
import Colors from '../constants/Colors';

function ActivityScreen() {
	const bottomSheetRef = useRef<BottomSheet>(null);

	const dayAct = useAppSelector((state) => state.currentActivity);

	const openModal = () => {
		bottomSheetRef.current?.snapToIndex(0);
	};

	if (dayAct.dayActivity?.activity) {
		return (
			<View
				flex={1}
				width="100%"
				alignItems="center"
				justifyContent="flex-start"
				bgColor={Colors.grey.extraLight}
			>
				<TopViewActivity
					title={dayAct.dayActivity.activity.name}
					openModal={openModal}
					isActivity
					id={dayAct.dayActivity?.activity.id}
				/>
				<EventActivityInfo event={dayAct.dayActivity.activity} />
				<LikeActivityModal activity={dayAct.dayActivity.activity} bottomSheetRef={bottomSheetRef} />
			</View>
		);
	}
	if (dayAct.accommodation) {
		return (
			<View
				flex={1}
				width="100%"
				alignItems="center"
				justifyContent="flex-start"
				bgColor={Colors.grey.extraLight}
			>
				<TopViewActivity title={dayAct.accommodation.location.locationName} />
				<EventAccommodationInfo event={dayAct.accommodation} />
			</View>
		);
	}

	if (dayAct.travelEvent) {
		console.log(dayAct.travelEvent);
		return (
			<View
				flex={1}
				width="100%"
				alignItems="center"
				justifyContent="flex-start"
				bgColor={Colors.grey.extraLight}
			>
				<TopViewActivity title="Travel details" />
				<EventTravelInfo event={dayAct.travelEvent} />
			</View>
		);
	}
	return <View />;
}

export default ActivityScreen;
