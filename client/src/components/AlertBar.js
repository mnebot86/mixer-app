import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const AlertBar = () => {
	const { alertType, alertText } = useSelector((state) => state.alertSlice);

	return (
		<View
			style={[
				styles.container,
				alertType === 'Error' && styles.error,
				alertType === 'Success' && styles.success,
			]}>
			<Text style={styles.text}>{alertText}</Text>
		</View>
	);
};

export default AlertBar;

const styles = StyleSheet.create({
	container: {
		width: 250,
		borderRadius: 8,
		paddingHorizontal: 5,
		paddingVertical: 10,
		alignSelf: 'center',
		marginTop: 10,
	},
	text: {
		fontSize: 18,
		textAlign: 'center',
	},
	error: {
		backgroundColor: 'red',
	},
	success: {
		backgroundColor: 'lightgreen',
	},
});
