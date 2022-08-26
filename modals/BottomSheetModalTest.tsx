import { View, Box, StatusBar } from 'native-base';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { Control, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../app/hooks';

import ButtonCustom from '../components/ui/ButtonCustom';

import { HomePageScreenProps } from '../types';
import TextInputForm from '../components/form/TextInput';
import { StoreNewUserInfo } from '../features/auth/authSlice';
import { DismissKeyboard } from '../components/utils/DismissKeyboard';

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
	},
	inner: {
		padding: 24,
		flex: 1,
		justifyContent: 'space-around',
	},
	header: {
		fontSize: 36,
		marginBottom: 48,
	},
});

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

	const onSubmit = (data: any) => {
		dispatch(StoreNewUserInfo({ creatorId: '1', ...data }));
	};

	const snapPoints = useMemo(() => ['50%', '70%'], []);

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
