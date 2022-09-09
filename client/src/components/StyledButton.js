import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const StyledButton = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default StyledButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'red',
		paddingHorizontal: 20,
		paddingVertical: 10,
		maxWidth: 250,
		minWidth: 250,
		borderRadius: 8,
	},
	text: {
		color: 'white',
		fontSize: 25,
		textAlign: 'center',
	},
});
