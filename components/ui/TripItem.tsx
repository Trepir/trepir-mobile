import { View, Text, Pressable, Image } from 'native-base';
import React, { useEffect, useState } from 'react';
import Colors from '../../constants/Colors';
import { useAppDispatch } from '../../app/hooks';
import Arrow from '../../assets/icons/Arrow';

type Trip = {
	name: string;
	startDate: string;
	endDate: string;
	photo: string;
};

function TripItem() {
	const [photo, setPhoto] = useState<Trip['photo']>(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg'
	);
	const [name, setName] = useState<Trip['name']>('Barcelona With Friends');
	const [startDate, setStartDate] = useState<Trip['startDate']>('20/10/2020');
	const [endDate, setEndDate] = useState<Trip['endDate']>('22/10/2020');

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
					<View
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center"
						p={2}
						mt={1}
						backgroundColor="amber.100"
					>
						<View>
							<Text>{name}</Text>
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
