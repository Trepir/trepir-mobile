import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
	size: number | string;
	color: string;
};

function AccommodationIcon({ size = 11, color = '000000' }: Props) {
	return (
		<Svg width={size} height={size} viewBox="0 0 96 96" fill="none">
			<Path
				d="M28 52C34.64 52 40 46.64 40 40C40 33.36 34.64 28 28 28C21.36 28 16 33.36 16 40C16 46.64 21.36 52 28 52ZM76 28H52C47.6 28 44 31.6 44 36V56H12V24C12 21.8 10.2 20 8 20C5.8 20 4 21.8 4 24V76C4 78.2 5.8 80 8 80C10.2 80 12 78.2 12 76V68H84V76C84 78.2 85.8 80 88 80C90.2 80 92 78.2 92 76V44C92 35.16 84.84 28 76 28Z"
				fill={color}
			/>
		</Svg>
	);
}

export default AccommodationIcon;
