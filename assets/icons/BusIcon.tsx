import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
	size: number | string;
	color: string;
};

function BusIcon({ size = 11, color = '000000' }: Props) {
	return (
		<Svg width={size} height={size} viewBox="0 0 96 96" fill="none">
			<Path
				d="M16 64C16 67.52 17.56 70.68 20 72.88V78C20 81.32 22.68 84 26 84C29.32 84 32 81.32 32 78V76H64V78C64 81.28 66.68 84 70 84C73.28 84 76 81.32 76 78V72.88C78.44 70.68 80 67.52 80 64V24C80 10 65.68 8 48 8C30.32 8 16 10 16 24V64ZM30 68C26.68 68 24 65.32 24 62C24 58.68 26.68 56 30 56C33.32 56 36 58.68 36 62C36 65.32 33.32 68 30 68ZM66 68C62.68 68 60 65.32 60 62C60 58.68 62.68 56 66 56C69.32 56 72 58.68 72 62C72 65.32 69.32 68 66 68ZM72 44H24V24H72V44Z"
				fill={color}
			/>
		</Svg>
	);
}

export default BusIcon;
