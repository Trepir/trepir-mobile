import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
	size: number | string;
	color: string;
};

function TrainIcon({ size = 11, color = '000000' }: Props) {
	return (
		<Svg width={size} height={size} viewBox="0 0 96 96" fill="none">
			<Path
				d="M48 8C32 8 16 10 16 24V62C16 69.72 22.28 76 30 76L25.4 80.6C24.16 81.84 25.04 84 26.84 84H31.2C31.72 84 32.24 83.8 32.6 83.4L40 76H56L63.4 83.4C63.76 83.76 64.28 84 64.8 84H69.16C70.96 84 71.84 81.84 70.56 80.6L66 76C73.72 76 80 69.72 80 62V24C80 10 64 8 48 8ZM30 68C26.68 68 24 65.32 24 62C24 58.68 26.68 56 30 56C33.32 56 36 58.68 36 62C36 65.32 33.32 68 30 68ZM44 40H24V24H44V40ZM66 68C62.68 68 60 65.32 60 62C60 58.68 62.68 56 66 56C69.32 56 72 58.68 72 62C72 65.32 69.32 68 66 68ZM72 40H52V24H72V40Z"
				fill={color}
			/>
		</Svg>
	);
}

export default TrainIcon;
