import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { PortalProvider } from '@gorhom/portal';
import { LogBox } from 'react-native';
import { store } from './app/store';
import GilroyLight from './assets/fonts/Gilroy-Light.otf';
import GilroyExtraBold from './assets/fonts/Gilroy-ExtraBold.otf';

import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

export default function App() {
	const isLoadingComplete = useCachedResources();
	// const colorScheme = useColorScheme();
	// const [fontsLoaded] = useFonts({
	// 	'Gilroy-ExtraBold': GilroyExtraBold,
	// 	'Gilroy-Light': GilroyLight,
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
						<PortalProvider>
							<Navigation /* colorScheme={colorScheme} */ />
						</PortalProvider>
					</GestureHandlerRootView>
					<StatusBar />
				</SafeAreaProvider>
			</NativeBaseProvider>
		</Provider>
	);
}
