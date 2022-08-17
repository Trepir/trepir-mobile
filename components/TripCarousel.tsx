import React from 'react';
import { View, Text, ScrollView } from 'native-base';
import Colors from '../constants/Colors';
import TripItem from './ui/TripItem';
import { useAppDispatch } from '../app/hooks';

function TripCarousel({ title }: { title: string }) {
	// const dispatch = useAppDispatch();
	// TRIPS STORED IN REDUX, THIS FUNCTION GETS THE TRIPS AND SETS THE STATE
	// useEffect(() => {
	//   const trip: Trip = dispatch(hereWeGetTheTrip);
	//   setPhoto(trip.photo);
	//   setUserName(trip.name);
	//   setStartDate(trip.startDate);
	//   setEndDate(trip.endDate);
	// }, []);
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
			name: 'Barcelona With Friends',
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
			<ScrollView horizontal>
				{trips.map((trip) => (
					<TripItem key={trip.id} trip={trip} />
				))}
			</ScrollView>
		</View>
	);
}

export default TripCarousel;
