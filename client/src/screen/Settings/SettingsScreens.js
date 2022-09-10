import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignOut from './components/SignOut';

const SettingsScreens = () => {
	return (
		<View style={styles.container}>
			<Text>Add Profile Picture</Text>
			<Text>Edit Information</Text>
			<Text>Sign Out</Text>
			<SignOut />
			<Text>Delete Profile</Text>
		</View>
	);
};

export default SettingsScreens;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
