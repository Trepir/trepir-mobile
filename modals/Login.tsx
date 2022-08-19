import { Box } from 'native-base';
import React, { useMemo } from 'react';
import { Control, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../app/hooks';

import ButtonCustom from '../components/ui/ButtonCustom';

import TextInputForm from '../components/form/TextInput';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';
import { fetchUser } from '../services/user';
import { storeUser } from '../features/user/userSlice';

export type LoginFromControl = Control<
	{
		username: string;
		email: string;
		password: string;
	},
	any
>;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 30,
	},
});

// Storing the user info in the secure storage
async function save(key: string, value: string) {
	await SecureStore.setItemAsync(key, value);
}

function Login({ reference }: { reference: React.Ref<BottomSheetModal> }) {
	const dispatch = useAppDispatch();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async () => {
		const uidFromFirebase = '1';
		try {
			console.log('hello');
			await save('user', uidFromFirebase);
			const payload = await fetchUser(uidFromFirebase);
			if (payload.data) {
				dispatch(storeUser(payload.data));
				// @ts-ignore
				reference.current.dismiss();
			} else {
				// SHOW ERROR ON THE SCREEN FIXME
				console.log('Login.tsx error:', payload.error);
			}
		} catch (error) {
			console.log('Login: ', error);
		}
	};

	const snapPoints = useMemo(() => ['50%', '80%'], []);

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={reference}
				index={0}
				snapPoints={snapPoints}
				enablePanDownToClose
				keyboardBehavior="fillParent"
				handleHeight={1000}
			>
				<DismissKeyboard>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						style={styles.container}
					>
						<TextInputForm
							name="email"
							control={control}
							errors={errors}
							placeholder="Your email"
						/>

						<TextInputForm
							name="Password"
							control={control}
							errors={errors}
							placeholder="Your password"
							password
						/>

						<Box mt={8}>
							<ButtonCustom
								pressFunction={handleSubmit(onSubmit)}
								text="     Login     "
								alignment="center"
							/>
						</Box>
					</KeyboardAvoidingView>
				</DismissKeyboard>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
}

export default Login;
