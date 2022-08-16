import { View, Text, Pressable } from 'native-base';
import React from 'react';
// import * as SecureStore from 'expo-secure-store';

// type Props = {};

function Login() {
	return (
		<View flex={1} justifyContent="center" alignItems="center">
			<Pressable
				onPress={() => {
					// Here we have to store the user's token in the SecureStore
					// SecureStore.setItemAsync('token', 'my-token');
				}}
			>
				<Text>Login</Text>
			</Pressable>
		</View>
	);
}

export default Login;
