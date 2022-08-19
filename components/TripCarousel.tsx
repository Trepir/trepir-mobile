import React from 'react';
import { View, Text, ScrollView } from 'native-base';
import TripItem from './ui/TripItem';
// import { useAppDispatch } from '../app/hooks';
import EmptyList from './createTrip/EmptyList';

type CarouselProps = {
	type: 'upcoming' | 'past' | 'favorites';
};
type Trip = {
	id: number;
	type: 'upcoming' | 'past' | 'favorites';
	name: string;
	startDate: string;
	endDate: string;
	photo: string;
};

function TripCarousel({ type }: CarouselProps) {
	// const dispatch = useAppDispatch();
	// TRIPS STORED IN REDUX, THIS FUNCTION GETS THE TRIPS AND SETS THE STATE
	// useEffect(() => {
	//   const trip: Trip = dispatch(hereWeGetTheTrip);
	//   setPhoto(trip.photo);
	//   setUserName(trip.name);
	//   setStartDate(trip.startDate);
	//   setEndDate(trip.endDate);
	// }, []);
	const Upcoming: Trip[] = [
		{
			id: 0,
			type: 'upcoming',
			name: 'Barcelona With Friends',
			startDate: '20/10/2022',
			endDate: '25/10/2022',
			photo:
				'https://lh5.googleusercontent.com/p/AF1QipNfnek1Kh4JxnY_y1wk6QzDVu_gFTJ3_kCcHNSU=w408-h408-k-no',
		},
		{
			id: 1,
			type: 'upcoming',
			name: 'San Diego September',
			startDate: '02/09/2020',
			endDate: '19/09/2020',
			photo:
				'https://lh5.googleusercontent.com/p/AF1QipOkrX4vAzk860HmFxzKFYjQ6ZoUy86kCJQyvG7I=w408-h306-k-no',
		},
	];
	const Past: Trip[] = [
		{
			id: 2,
			type: 'past',
			name: 'Hiking in Caracas',
			startDate: '20/06/2019',
			endDate: '15/07/2019',
			photo:
				'https://lh5.googleusercontent.com/p/AF1QipPQFWIH24CNQqm40ZKch1zzZC_5AEmBy3Ydv2xs=w427-h240-k-no',
		},
		{
			id: 3,
			type: 'past',
			name: 'Yellowstone camper trip',
			startDate: '12/07/2020',
			endDate: '29/08/2020',
			photo:
				'https://lh5.googleusercontent.com/p/AF1QipPDa-QY8CpOjVZ7iH-ydSqTszeRqVt2lonemihL=w408-h306-k-no',
		},
		{
			id: 4,
			type: 'past',
			name: 'Mexico City',
			startDate: '25/09/2020',
			endDate: '12/10/2020',
			photo:
				'https://lh5.googleusercontent.com/p/AF1QipP8mn7Tlt8nC6IEVnmD1Hp20sRoZIxh-nMxzJEJ=w408-h306-k-no',
		},
	];

	let title: string;
	let empty: string;
	let trips: Trip[];

	switch (type) {
		case 'upcoming':
			title = 'Upcoming trips';
			empty = 'You have no upcoming trips, create one!';
			trips = Upcoming;
			break;
		case 'past':
			title = 'Past trips';
			empty = "You didn't completed any trips on the app yet!";
			trips = Past;
			break;
		default:
			title = 'Favorites';
			empty = 'Favorite trips to save them here!';
			trips = Upcoming;
	}

	return (
		<View>
			<Text paddingX={6} paddingY={2} fontSize="2xl">
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
