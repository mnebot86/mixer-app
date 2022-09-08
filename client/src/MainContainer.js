import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainNavigation from './navigation/MainNavigation';

const MainContainer = () => {
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
