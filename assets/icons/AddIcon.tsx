import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
	size: number | string;
	color: string;
};

function AddIcon({ size = 11, color = '000000' }: Props) {
	return (
		<Svg width={size} height={size} viewBox="0 0 96 96" fill="none">
			<Path
				d="M48 28C45.8 28 44 29.8 44 32V44H32C29.8 44 28 45.8 28 48C28 50.2 29.8 52 32 52H44V64C44 66.2 45.8 68 48 68C50.2 68 52 66.2 52 64V52H64C66.2 52 68 50.2 68 48C68 45.8 66.2 44 64 44H52V32C52 29.8 50.2 28 48 28ZM48 8C25.92 8 8 25.92 8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8ZM48 80C30.36 80 16 65.64 16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80Z"
				fill={color}
			/>
		</Svg>
	);
}

export default AddIcon;
