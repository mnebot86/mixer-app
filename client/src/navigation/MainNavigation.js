import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MainNavigation = () => {
	return (
		<View style={styles.container}>
			<Text>mainNavigation</Text>
		</View>
	);
};

export default MainNavigation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
