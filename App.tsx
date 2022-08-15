import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './app/store';

import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
	const isLoadingComplete = useCachedResources();
	// const colorScheme = useColorScheme();

	const trepirTheme = {
		// primary: {},
	};

	const theme = extendTheme({ colors: trepirTheme });

	if (!isLoadingComplete) {
		return null;
	}
	return (
		<Provider store={store}>
			<NativeBaseProvider theme={theme}>
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
