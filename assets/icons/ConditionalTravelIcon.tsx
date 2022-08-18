import React from 'react';
import BoatIcon from './BoatIcon';
import BusIcon from './BusIcon';
import CarIcon from './CarIcon';
import FlightIcon from './FlightIcon';
import TrainIcon from './TrainIcon';

type Props = {
	type: string;
	size: number | string;
	color: string;
};

function ConditionalTravelIcon({ type, size, color }: Props) {
	switch (type) {
		case 'Flight':
			return <FlightIcon size={size} color={color} />;
		case 'Bus':
			return <BusIcon size={size} color={color} />;
		case 'Boat':
			return <BoatIcon size={size} color={color} />;
		case 'Car':
			return <CarIcon size={size} color={color} />;
		case 'Train':
			return <TrainIcon size={size} color={color} />;
		default:
			return <TrainIcon size={size} color={color} />;
	}
}

export default ConditionalTravelIcon;
