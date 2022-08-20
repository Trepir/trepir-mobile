import { Text, Pressable, Image, VStack, HStack } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
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
	const navigation = useNavigation();
	return (
		<Pressable
			borderRadius={18}
			backgroundColor={Colors.white}
			width={350}
			p={2}
			m={2}
			shadow={2}
			onPress={() => {
				navigation.navigate('TripStack',);
			}}
		>
			<VStack>
				<Image
					source={{
						uri: photo,
					}}
					alt="trip"
					width="100%"
					height={150}
					borderRadius={12}
				/>
				<HStack justifyContent="space-between" alignItems="center" px={2} mt={1}>
					<VStack>
						<Text fontSize="xl" fontWeight="semibold" isTruncated>
							{name}
						</Text>
						<Text>
							{startDate} - {endDate}
						</Text>
					</VStack>
					<Arrow size={11} />
				</HStack>
			</VStack>
		</Pressable>
	);
}

export default TripItem;
