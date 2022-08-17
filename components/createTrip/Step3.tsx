import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'native-base';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';

type Props = {
	// eslint-disable-next-line no-unused-vars
	jumpTo: (key: string) => void;
};

function Step3({ jumpTo }: Props) {
	const navigation = useNavigation();

	// const newActivity = useAppSelector((state) => state.newActivity);

	// useEffect(() => {
	// 	console.log('GOT TO THE USE EFFECT', newActivity);

	// 	if (newActivity.name !== '') {
	// 		console.log('DOING FETCH =>>>>>>>>>>>>>>>>>><');
	// 		fetch('http://192.168.1.215:3333/activity/create', {
	// 			body: JSON.stringify(newActivity),
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		})
	// 			.then((response) => response.json())
	// 			.then((json) => {
	// 				console.log('Made IT', {
	// 					json,
	// 				});
	// 			})
	// 			.catch((err) => {
	// 				console.log({
	// 					err,
	// 				});
	// 			});
	// 	}
	// }, [newActivity]);

	return (
		<View>
			<Text>CreateScreen</Text>
			<Pressable
				py={5}
				my={5}
				bgColor="amber.300"
				onPress={() => {
					navigation.navigate('NewTravelModal');
				}}
			>
				<Text>Add Travel Modal</Text>
			</Pressable>
			<Pressable
				py={5}
				my={5}
				bgColor="amber.300"
				onPress={() => {
					navigation.navigate('NewAccommodationModal');
				}}
			>
				<Text>Add Accommodation Modal</Text>
			</Pressable>
			<Pressable
				py={5}
				my={5}
				bgColor="amber.300"
				onPress={() => {
					navigation.navigate('NewActivityModal');
				}}
			>
				<Text>Add Activity Modal</Text>
			</Pressable>
		</View>
	);
}

export default Step3;
