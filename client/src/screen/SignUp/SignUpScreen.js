import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StyledInput, StyledButton } from '../../components';
import image from '../../assets/images/signup-bg.jpg';

const SignUpScreen = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.imgBG}>
				<View style={styles.overlay} />
				<Text style={styles.title}>Create an Account</Text>
				<View style={styles.inputContainer}>
					<StyledInput placeholder="First Name" />
					<StyledInput placeholder="Last Name" />
					<StyledInput placeholder="Email" />
					<StyledInput placeholder="Password" />
				</View>
				<View style={styles.btnContainer}>
					<StyledButton title="Submit" />
				</View>
				<Text style={styles.text}>
					All ready a member?{' '}
					<Text style={styles.subText}>Sign In</Text>
				</Text>
			</ImageBackground>
		</View>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		textAlign: 'center',
		fontSize: 30,
		zIndex: 1,
		marginTop: 50,
		fontWeight: 'bold',
	},
	imgBG: {
		flex: 1,
		paddingTop: '8%',
		position: 'relative',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
	},
	inputContainer: {
		height: 350,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	btnContainer: {
		alignItems: 'center',
	},
	text: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		marginTop: 15,
		fontWeight: 'bold',
	},
	subText: {
		color: 'red',
	},
});
