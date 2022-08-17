import { Box } from 'native-base';
import React, { useMemo } from 'react';
import { Control, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../app/hooks';

import ButtonCustom from '../components/ui/ButtonCustom';

import TextInputForm from '../components/form/TextInput';
import { storeNewAuth } from '../features/auth/authSlice';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';

export type RegisterFromControl = Control<
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

function Register({ reference }: { reference: React.Ref<BottomSheetModal> }) {
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
		await save('user', '1');
		dispatch(storeNewAuth({ token: '1' }));
		// @ts-ignore
		reference.current.dismiss();
	};

	const snapPoints = useMemo(() => ['50%', '90%'], []);

	// const handleSheetChanges = useCallback((index: number) => {
	// 	console.log('handleSheetChanges', index);
	// }, []);
	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={reference}
				index={0}
				snapPoints={snapPoints}
				// onChange={handleSheetChanges}
				enablePanDownToClose
				keyboardBehavior="interactive"
				detached
			>
				<DismissKeyboard>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						style={styles.container}
					>
						<TextInputForm
							name="Username"
							control={control}
							errors={errors}
							placeholder="Your username"
						/>

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
								text="     Register     "
								alignment="center"
							/>
						</Box>
					</KeyboardAvoidingView>
				</DismissKeyboard>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
}

export default Register;