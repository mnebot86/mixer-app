import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BarScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Favorite</Text>
			<Text>Create</Text>
		</View>
	);
};

export default BarScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
