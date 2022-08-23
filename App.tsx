import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { store } from './app/store';
import GilroyLight from './assets/fonts/Gilroy-Light.otf';
import GilroyExtraBold from './assets/fonts/Gilroy-ExtraBold.otf';

import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
	const isLoadingComplete = useCachedResources();
	// const colorScheme = useColorScheme();
	// const [fontsLoaded] = useFonts({
	// 	'Gilroy-ExtraBold': GilroyExtraBold,
	// 	'Gilroy-Light': GilroyLight,
	// });

	// const theme = {};
	// 	= extendTheme({
	// 	fontConfig: {
	// 		Gilroy: {
	// 			100: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 			200: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 			300: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 			400: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 			500: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 			600: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 			700: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 			800: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 			900: {
	// 				normal: 'Gilroy-Light',
	// 				bold: 'Gilroy-ExtraBold',
	// 			},
	// 		},
	// 	},

	// 	fonts: {
	// 		heading: 'Gilroy',
	// 		body: 'Gilroy',
	// 		mono: 'Gilroy',
	// 	},
	// });

	if (!isLoadingComplete) {
		return null;
	}
	return (
		<Provider store={store}>
			{/* <NativeBaseProvider theme={theme}> */}
			<NativeBaseProvider>
				<SafeAreaProvider>
					<GestureHandlerRootView style={{ flex: 1 }}>
						<Navigation /* colorScheme={colorScheme} */ />
					</GestureHandlerRootView>
					<StatusBar />
				</SafeAreaProvider>
			</NativeBaseProvider>
		</Provider>
	);
}
