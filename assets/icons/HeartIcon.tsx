import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
	size: number | string;
	color: string;
};

function HeartIcon({ size = 24, color = '000000' }: Props) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<Path
				d="M7.73662 3.00832C6.21262 2.92732 4.68412 3.43732 3.55912 4.56232C1.30762 6.81832 1.54312 10.6043 3.95212 13.0163L4.72162 13.7858L11.7146 20.7848C11.8552 20.925 12.0456 21.0037 12.2441 21.0037C12.4426 21.0037 12.633 20.925 12.7736 20.7848L19.7636 13.7858L20.5331 13.0163C22.9421 10.6043 23.1761 6.81832 20.9231 4.56382C18.6716 2.30932 14.8931 2.54932 12.4856 4.95982L12.2426 5.20282L11.9996 4.95982C10.7951 3.75232 9.26212 3.08932 7.73662 3.00832Z"
				fill={color}
			/>
		</Svg>
	);
}

export default HeartIcon;
