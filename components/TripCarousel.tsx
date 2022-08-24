import React from 'react';
import { View, Text, ScrollView } from 'native-base';
import TripItem from './ui/TripItem';
// import { useAppDispatch } from '../app/hooks';
import EmptyList from './createTrip/EmptyList';
import { TripBasicState } from '../types';

type CarouselProps = {
	type: 'upcoming' | 'past' | 'shared' | 'current';
	trips: TripBasicState[];
};

function TripCarousel({ type, trips }: CarouselProps) {
	let title: string;
	let empty: string;

	switch (type) {
		case 'upcoming':
			title = 'Upcoming trips';
			empty = 'You have no upcoming trips, create one!';
			break;
		case 'current':
			title = 'Current trip';
			empty = 'You have no current trip.';
			break;
		case 'past':
			title = 'Past trips';
			empty = "You didn't completed any trips on the app yet!";
			break;
		case 'shared':
			title = 'Shared trips';
			empty = 'You have no shared trips.';
			break;
		default:
			title = 'Ups, something went wrong';
			empty = 'UPSIII';
	}

	return (
		<View pb={type === 'past' ? 3 : 0}>
			<Text paddingX={6} mt={4} fontSize="2xl">
				{title}
			</Text>
			{trips.length > 0 ? (
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{trips.map((trip, index) => (
						<View key={trip.id} pl={index === 0 ? 2 : 0} pr={index === trips.length - 1 ? 2 : 0}>
							<TripItem key={trip.id} trip={trip} />
						</View>
					))}
				</ScrollView>
			) : (
				<EmptyList text={empty} />
			)}
		</View>
	);
}

export default TripCarousel;
