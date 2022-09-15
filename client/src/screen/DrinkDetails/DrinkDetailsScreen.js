import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const DrinkDetailsScreen = () => {
	const { id } = useSelector((state) => state.param);

	console.log('ID', id);

	return (
		<View style={styles.container}>
			<Text>Drink Details</Text>
		</View>
	);
};

export default DrinkDetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
