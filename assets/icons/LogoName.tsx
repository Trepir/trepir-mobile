import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

// eslint-disable-next-line react/prop-types
function LogoName({ size = 40 }) {
	return (
		<Svg width={size * 2.5} height={size} viewBox="0 0 127 49" fill="none">
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M21.282 10H0.482031V16.16H7.68203V38H14.082V16.16H21.282V10ZM38.8036 38H45.6836L39.7236 27.72C42.8036 26.16 44.8836 23.04 44.8836 19.6C44.8836 14.28 40.6036 10 35.2836 10H24.0836V38H30.4836V28.8H33.5236L38.8036 38ZM30.4836 16H35.2836C37.0436 16 38.4836 17.56 38.4836 19.6C38.4836 21.64 37.0436 23.2 35.2836 23.2H30.4836V16ZM55.093 31.84V26.88H65.093V20.8H55.093V16.16H66.093V10H48.693V38H66.293V31.84H55.093ZM80.5039 10H69.9039V38H76.3039V29.2H80.5039C86.0239 29.2 90.3039 24.92 90.3039 19.6C90.3039 14.28 86.0239 10 80.5039 10ZM80.5039 23.2H76.3039V16H80.5039C82.4639 16 83.9039 17.56 83.9039 19.6C83.9039 21.64 82.4639 23.2 80.5039 23.2ZM93.4977 10V38H99.8977V10H93.4977ZM119.429 38H126.309L120.349 27.72C123.429 26.16 125.509 23.04 125.509 19.6C125.509 14.28 121.229 10 115.909 10H104.709V38H111.109V28.8H114.149L119.429 38ZM111.109 16H115.909C117.669 16 119.109 17.56 119.109 19.6C119.109 21.64 117.669 23.2 115.909 23.2H111.109V16Z"
				fill="#1CB985"
			/>
		</Svg>
	);
}

export default LogoName;