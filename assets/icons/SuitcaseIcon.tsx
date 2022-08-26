import React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line react/prop-types
function SuitcaseIcon({ size = 24, color = '#000' }) {
	return (
		<Svg width={size} height={size} viewBox="0 0 96 96" fill="none">
			<Path
				d="M80 24H68V16C68 11.56 64.44 8 60 8H36C31.56 8 28 11.56 28 16V24H16C11.56 24 8 27.56 8 32V76C8 80.44 11.56 84 16 84H80C84.44 84 88 80.44 88 76V32C88 27.56 84.44 24 80 24ZM36 16H60V24H36V16ZM80 76H16V68H80V76ZM80 56H16V36C16 33.8 17.8 32 20 32H28V36C28 38.2 29.8 40 32 40C34.2 40 36 38.2 36 36V32H60V36C60 38.2 61.8 40 64 40C66.2 40 68 38.2 68 36V32H76C78.2 32 80 33.8 80 36V56Z"
				fill={color}
			/>
		</Svg>
	);
}
export default SuitcaseIcon;
