import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StyledButton } from '../../components';
import backgroundImage from '../../assets/images/mixer-welcome-bg.jpg';
import { useFonts } from 'expo-font';

const WelcomeScreen = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		HammersmithOne: require('../../assets/fonts/HammersmithOne-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	} else {
		return (
			<View style={styles.container}>
				<ImageBackground
					source={backgroundImage}
					resizeMode="cover"
					style={styles.image}>
					<Text style={styles.text}>MiXer</Text>

					<View style={styles.btnContainer}>
						<StyledButton
							title="Sign In"
							onPress={() => navigation.navigate('SignInScreen')}
						/>

						<StyledButton
							title="Sign Up"
							onPress={() => navigation.navigate('SignUpScreen')}
						/>
					</View>
				</ImageBackground>
			</View>
		);
	}
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	btnContainer: {
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 250,
	},
	image: {
		flex: 1,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 50,
		marginTop: '25%',
		marginBottom: '10%',
		fontFamily: 'HammersmithOne',
	},
});
