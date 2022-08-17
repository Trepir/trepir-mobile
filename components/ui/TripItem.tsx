import { View, Text, Pressable, Image } from 'native-base';
import React, { useEffect, useState } from 'react';
import Colors from '../../constants/Colors';
import { useAppDispatch } from '../../app/hooks';
import Arrow from '../../assets/icons/Arrow';

type Trip = {
	id: number;
	name: string;
	startDate: string;
	endDate: string;
	photo: string;
};

function TripItem({ trip }: { trip: Trip }) {
	const { name, startDate, endDate, photo } = trip;
	return (
		<View borderRadius={18} backgroundColor={Colors.white} width={350} p={2} m={2} shadow={2}>
			<Pressable>
				<View>
					<Image
						source={{
							uri: photo,
						}}
						alt="trip"
						width="100%"
						height={150}
						borderRadius={12}
					/>
					<View flexDirection="row" justifyContent="space-between" alignItems="center" p={2} mt={1}>
						<View>
							<Text fontSize="xl" fontWeight="bold">
								{name}
							</Text>
							<Text>
								{startDate} - {endDate}
							</Text>
						</View>
						<View>
							<Arrow size={11} />
						</View>
					</View>
				</View>
			</Pressable>
		</View>
	);
}

export default TripItem;
