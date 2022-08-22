import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
	size: number | string;
	color: string;
};

function DeleteIcon({ size = 11, color = '000000' }: Props) {
	return (
		<Svg width={size} height={size} viewBox="0 0 80 80" fill="none">
			<Path
				d="M40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM56 44H24C21.8 44 20 42.2 20 40C20 37.8 21.8 36 24 36H56C58.2 36 60 37.8 60 40C60 42.2 58.2 44 56 44Z"
				fill={color}
			/>
		</Svg>
	);
}

export default DeleteIcon;
