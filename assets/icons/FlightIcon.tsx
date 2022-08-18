import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
	size: number | string;
	color: string;
};

function FlightIcon({ size = 11, color = '000000' }: Props) {
	return (
		<Svg width={size} height={size} viewBox="0 0 96 96" fill="none">
			<Path
				d="M85.92 54.8L54 36V14C54 10.68 51.32 8 48 8C44.68 8 42 10.68 42 14V36L10.08 54.8C8.8 55.52 8 56.92 8 58.4C8 61.2 10.68 63.2 13.36 62.44L42 54.04V76L32.96 81.4C32.36 81.76 32 82.44 32 83.12V85.12V85.44C32 86.76 33.24 87.72 34.48 87.4L46.16 84.48L48 84L49.52 84.36L51.2 84.8L58.8 86.72L61.48 87.4C62.76 87.72 63.96 86.76 63.96 85.44V83.96V83.12C63.96 82.4 63.6 81.76 63 81.4L54 76V54L82.64 62.4C85.32 63.2 88 61.2 88 58.4C88 56.92 87.2 55.52 85.92 54.8Z"
				fill={color}
			/>
		</Svg>
	);
}

export default FlightIcon;
