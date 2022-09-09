import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StyledInput, StyledButton, AlertBar } from '../../components';
import image from '../../assets/images/signup-bg.jpg';

import { SIGN_UP } from '../../services/user';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { setToken } from '../../redux/slices/tokenSlice';
import {
	setAlertText,
	setAlertType,
	clearAlert,
} from '../../redux/slices/alertSlice';

const SignUpScreen = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const onSubmit = async () => {
		const credentials = {
			firstName,
			lastName,
			email,
			password,
		};

		if (!credentials) return;

		const response = await SIGN_UP(credentials);

		if (!response) return;

		const error = response.error;

		if (!error) {
			const user = response.user;
			dispatch(setUser(user));

			const token = response.token;
			dispatch(setToken(token));

			dispatch(setAlertType('Success'));
			dispatch(setAlertText('Account Creation Successful'));

			setTimeout(() => {
				dispatch(clearAlert());
				navigation.navigate('DashboardScreen');
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
				style={styles.imgBG}>
				<View style={styles.overlay} />
				<Text style={styles.title}>Create an Account</Text>
				<AlertBar color="red" />
				<View style={styles.inputContainer}>
					<StyledInput
						placeholder="First Name"
						value={firstName}
						onChangeText={setFirstName}
					/>
					<StyledInput
						placeholder="Last Name"
						value={lastName}
						onChangeText={setLastName}
					/>
					<StyledInput
						placeholder="Email"
						value={email}
						onChangeText={setEmail}
						autoCapitalize="none"
					/>
					<StyledInput
						placeholder="Password"
						value={password}
						onChangeText={setPassword}
						secureTextEntry
						autoCapitalize="none"
					/>
				</View>

				<View style={styles.btnContainer}>
					<StyledButton title="Submit" onPress={onSubmit} />
				</View>

				<Text style={styles.text}>
					All ready a member?
					<Text
						style={styles.subText}
						onPress={() => navigation.navigate('SignInScreen')}>
						{' '}
						Sign In
					</Text>
				</Text>
			</ImageBackground>
		</View>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		textAlign: 'center',
		fontSize: 30,
		zIndex: 1,
		marginTop: 50,
		fontWeight: 'bold',
	},
	imgBG: {
		flex: 1,
		paddingTop: '8%',
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
	inputContainer: {
		height: 350,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	btnContainer: {
		alignItems: 'center',
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
