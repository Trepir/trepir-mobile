import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
	size: number | string;
	color: string;
};

function CarIcon({ size = 11, color = '000000' }: Props) {
	return (
		<Svg width={size} height={size} viewBox="0 0 96 96" fill="none">
			<Path
				d="M75.68 24.04C74.88 21.68 72.64 20 70 20H26C23.36 20 21.16 21.68 20.32 24.04L12.44 46.72C12.16 47.56 12 48.44 12 49.36V78C12 81.32 14.68 84 18 84C21.32 84 24 81.32 24 78V76H72V78C72 81.28 74.68 84 78 84C81.28 84 84 81.32 84 78V49.36C84 48.48 83.84 47.56 83.56 46.72L75.68 24.04ZM26 64C22.68 64 20 61.32 20 58C20 54.68 22.68 52 26 52C29.32 52 32 54.68 32 58C32 61.32 29.32 64 26 64ZM70 64C66.68 64 64 61.32 64 58C64 54.68 66.68 52 70 52C73.32 52 76 54.68 76 58C76 61.32 73.32 64 70 64ZM20 44L25.08 28.72C25.64 27.12 27.16 26 28.88 26H67.12C68.84 26 70.36 27.12 70.92 28.72L76 44H20Z"
				fill={color}
			/>
		</Svg>
	);
}

export default CarIcon;
