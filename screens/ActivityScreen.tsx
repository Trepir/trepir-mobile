import { View } from 'native-base';
import React from 'react';
import { useAppSelector } from '../app/hooks';
import EventAccommodationInfo from '../components/activity/EventAccommodationInfo';
import EventActivityInfo from '../components/activity/EventActivityInfo';
import EventTravelInfo from '../components/activity/EventTravelInfo';
import LikeActivityModal from '../components/activity/LikeActivityModal';
import TopViewActivity from '../components/activity/TopViewActivity';
import Colors from '../constants/Colors';
import { DayAct } from '../types';

function filterActivity(dayAct: DayAct) {
	if (dayAct.dayActivity?.activity) {
		return (
			<View
				flex={1}
				width="100%"
				alignItems="center"
				justifyContent="flex-start"
				bgColor={Colors.grey.extraLight}
			>
				<TopViewActivity title="Activity details" isActivity />
				<EventActivityInfo event={dayAct.dayActivity.activity} />;
				<LikeActivityModal />
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
				<TopViewActivity title="Accommodation details" />
				<EventAccommodationInfo event={dayAct.accommodation} />;
			</View>
		);
	}

	if (dayAct.travelEvent) {
		return (
			<View
				flex={1}
				width="100%"
				alignItems="center"
				justifyContent="flex-start"
				bgColor={Colors.grey.extraLight}
			>
				<TopViewActivity title="Travel details" />
				<EventTravelInfo event={dayAct.travelEvent} />;
			</View>
		);
	}
	return <View />;
}

function ActivityScreen() {
	const wholeDay = useAppSelector((state) => state.currentActivity);
	return filterActivity(wholeDay);
}

export default ActivityScreen;
