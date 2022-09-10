import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { StyledButton } from '../../../components';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../redux/slices/userSlice';
import { useNavigation } from '@react-navigation/native';

const SignOut = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handleLogout = async () => {
		dispatch(clearUser());
		await SecureStore.deleteItemAsync('token');
		navigation.navigate('WelcomeScreen');
	};

	return <StyledButton title="Sign Out" onPress={handleLogout} />;
};

export default SignOut;

const styles = StyleSheet.create({});
