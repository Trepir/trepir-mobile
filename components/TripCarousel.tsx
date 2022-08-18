import React from 'react';
import { View, Text, ScrollView } from 'native-base';
import TripItem from './ui/TripItem';
// import { useAppDispatch } from '../app/hooks';
import EmptyList from './createTrip/EmptyList';

type CarouselProps = {
	type: 'upcoming' | 'past' | 'favorites';
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

	let title: string;
	let empty: string;

	switch (type) {
		case 'upcoming':
			title = 'Upcoming trips';
			empty = 'You have no upcoming trips, create one!';
			break;
		case 'past':
			title = 'Past trips';
			empty = "You didn't completed any trips on the app yet!";
			break;
		default:
			title = 'Favorites';
			empty = 'Favorite trips to save them here!';
	}
	type Trip = {
		id: number;
		name: string;
		startDate: string;
		endDate: string;
		photo: string;
	};

	const trips: Trip[] = [
		{
			id: 0,
			name: 'Barcelona With Friends',
			startDate: '20/10/2020',
			endDate: '22/10/2020',
			photo:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
		},
		{
			id: 1,
			name: 'San Diego Summer',
			startDate: '20/10/2020',
			endDate: '22/10/2020',
			photo:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
		},
		{
			id: 2,
			name: 'Barcelona With Friends and Friends and Friends and Friends',
			startDate: '20/10/2020',
			endDate: '22/10/2020',
			photo:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
		},
		{
			id: 3,
			name: 'Barcelona With Friends',
			startDate: '20/10/2020',
			endDate: '22/10/2020',
			photo:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
		},
		{
			id: 4,
			name: 'Barcelona With Friends',
			startDate: '20/10/2020',
			endDate: '22/10/2020',
			photo:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
		},
	];
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
