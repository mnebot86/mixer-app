import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { StyledInput, StyledButton, AlertBar } from '../../components';
import image from '../../assets/images/signin-bg.jpg';

import { LOGIN } from '../../services/user';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import {
	setAlertText,
	setAlertType,
	clearAlert,
} from '../../redux/slices/alertSlice';

const SignInScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = async () => {
		const credentials = {
			email,
			password,
		};

		if (!credentials) return;

		const response = await LOGIN(credentials);

		if (!response) return;

		const error = response.error;
		if (!error) {
			const user = response.user;

			const token = response.token;
			await SecureStore.setItemAsync('token', token);

			dispatch(setAlertType('Success'));
			dispatch(setAlertText('Login Successful'));

			setTimeout(() => {
				dispatch(setUser(user));
				dispatch(clearAlert());
				navigation?.navigate('DashboardScreen');
			}, 1500);
		} else {
			dispatch(setAlertType('Error'));
			dispatch(setAlertText(error));

			setTimeout(() => {
				dispatch(clearAlert());
			}, 5000);
		}
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.img}>
				<View style={styles.overlay} />

				<AlertBar />

				<Text style={styles.title}>Welcome Back</Text>
				<View style={styles.inputContainer}>
					<StyledInput
						placeholder="Email"
						autoCapitalize="none"
						value={email}
						onChangeText={setEmail}
					/>
					<StyledInput
						placeholder="Password"
						secureTextEntry
						autoCapitalize="none"
						value={password}
						onChangeText={setPassword}
					/>
					<StyledButton title="Sign In" onPress={onSubmit} />
					<Text
						style={styles.text}
						onPress={() => navigation?.navigate('SignUpScreen')}>
						Not a member? <Text style={styles.subText}> Join!</Text>
					</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	img: {
		flex: 1,
		paddingTop: '8%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 30,
		zIndex: 1,
		marginTop: 50,
		fontWeight: 'bold',
	},
	inputContainer: {
		height: 360,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		position: 'relative',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
	},
	text: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		marginTop: 15,
		fontWeight: 'bold',
	},
	subText: {
		color: 'red',
	},
});
