import { useAppSelector } from '../app/hooks';

const lightColors = {
	white: '#fff',
	black: '#000',
	grey: {
		dark: '#343434',
		medium: '#808080',
		light: '#d1d1d1',
		extraLight: '#f4f4f4',
		offWhite: '#f9f9f9',
	},
	primary: {
		normal: 'rgba(28, 185, 133, 1)',
		// darkk: '#008787',
		dark: 'rgba(24, 156, 109, 1)',
		light: 'rgba(55, 220, 165, 1)',
		inputLabel: 'rgba(28, 185, 133, 1)',
		softIcon: '#7ED3B7',
		softIconBackground: '#DEF5ED',
	},
	secondary: {
		normal: '#FF9D00',
	},
};

const darkColors = {
	white: '#000',
	black: '#fff',
	grey: {
		dark: '#f9f9f9',
		medium: '#d1d1d1',
		light: '#808080',
		extraLight: '#f4f4f4',
		offWhite: '#343434',
	},
	primary: {
		normal: 'rgba(28, 185, 133, 1)',
		// darkk: '#008787',
		dark: 'rgba(24, 156, 109, 1)',
		light: 'rgba(55, 220, 165, 1)',
		inputLabel: 'rgba(28, 185, 133, 1)',
		softIcon: '#DEF5ED',
		softIconBackground: '#7ED3B7',
	},
	secondary: {
		normal: '#FF9D00',
	},
};

// const Colors = {
// 	[{ light: any }],
// };

// function useColors() {
// 	const theme = useAppSelector((state) => state.theme);

// 	if (theme === 'light') {
// 		Colors[0].light = { ...lightColors };
// 	} else {
// 		Colors = darkColors;
// 	}
// }

// export default Colors;

export default {
	white: '#fff',
	black: '#000',
	grey: {
		dark: '#343434',
		medium: '#808080',
		light: '#d1d1d1',
		extraLight: '#f4f4f4',
		offWhite: '#f9f9f9',
	},
	primary: {
		normal: 'rgba(28, 185, 133, 1)',
		// darkk: '#008787',
		dark: 'rgba(24, 156, 109, 1)',
		light: 'rgba(55, 220, 165, 1)',
		inputLabel: 'rgba(28, 185, 133, 1)',
		softIcon: '#7ED3B7',
		softIconBackground: '#DEF5ED',
	},
	secondary: {
		normal: '#FF9D00',
	},
};
