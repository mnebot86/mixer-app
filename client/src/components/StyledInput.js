import { StyleSheet, TextInput } from 'react-native';

const StyledInput = ({
	placeholder,
	placeholderTextColor,
	autoCapitalize,
	children,
	onChangeText,
	secureTextEntry,
	value,
}) => {
	return (
		<TextInput
			style={styles.input}
			placeholder={placeholder}
			placeholderTextColor={placeholderTextColor}
			autoCapitalize={autoCapitalize}
			onChangeText={onChangeText}
			value={value}
			secureTextEntry={secureTextEntry}>
			{children}
		</TextInput>
	);
};

export default StyledInput;

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#eee',
		paddingVertical: 10,
		paddingHorizontal: 20,
		width: 250,
		borderRadius: 8,
		border: 'solid 1.5px #d3d3d3',
	},
});
