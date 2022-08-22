import React from 'react';
import { View, Text, ScrollView } from 'native-base';
import TripItem from './ui/TripItem';
// import { useAppDispatch } from '../app/hooks';
import EmptyList from './createTrip/EmptyList';
import { TripBasicState } from '../types';

type CarouselProps = {
	type: 'upcoming' | 'past' | 'favorites' | 'current';
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
		default:
			title = 'Favorites';
			empty = 'Favorite trips to save them here!';
	}

	return (
		<View>
			<Text paddingX={6} mt={4} fontSize="2xl">
				{title}
			</Text>
			{trips.length > 0 ? (
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{trips.map((trip) => (
						<TripItem key={trip.id} trip={trip} />
					))}
				</ScrollView>
			) : (
				<EmptyList text={empty} />
			)}
		</View>
	);
}

export default TripCarousel;
