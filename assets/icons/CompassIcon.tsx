import React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line react/prop-types
function CompassIcon({ size = 24, color = '#000' }) {
	return (
		<Svg viewBox="0 0 32 32" height={size} width={size}>
			<Path
				fill={color}
				d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.848 9.53-2.324 3.724-1.55 2.484c.006.088.026.172.026.262 0 2.21-1.79 4-4 4-.09 0-.174-.02-.262-.026l-2.486 1.55-3.722 2.324a1.006 1.006 0 0 1-1.238-.14.996.996 0 0 1-.14-1.236l2.324-3.724 1.55-2.484C12.02 16.174 12 16.09 12 16c0-2.21 1.79-4 4-4 .09 0 .174.02.262.026l2.486-1.55 3.722-2.324a1 1 0 0 1 1.236.142c.332.328.39.84.142 1.236zM14 16a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0z"
			/>
		</Svg>
	);
}

export default CompassIcon;
