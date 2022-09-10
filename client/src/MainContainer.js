import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import * as SecureStore from 'expo-secure-store';
import { verifyUser } from './services/user';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from './redux/slices/userSlice';

const MainContainer = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const verifyUserToken = async () => {
			const token = await SecureStore.getItemAsync('token');

			if (!!token) {
				const currentUser = await verifyUser(token);
				dispatch(setUser(currentUser));
			} else {
				dispatch(clearUser);
				navigation.navigate('WelcomeScreen');
			}
		};

		verifyUserToken();
	}, []);

	return (
		<View style={styles.container}>
			<MainNavigation />
		</View>
	);
};

export default MainContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
