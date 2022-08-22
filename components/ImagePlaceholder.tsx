import { Image, View } from 'native-base';
import React from 'react';
import placeholder from '../assets/images/placeholder.png';

function ImagePlaceholder() {
	return (
		<View height="120%" width="100%" justifyContent="center">
			<Image
				source={placeholder}
				style={{
					width: '100%',
					height: '60%',
				}}
				alt="placeholder"
			/>
		</View>
	);
}

export default ImagePlaceholder;
