import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from '../screen/SignUp/SignUpScreen';
import SignInScreen from '../screen/SignIn/SignInScreen';
import WelcomeScreen from '../screen/Welcome/WelcomeScreen';
import DashboardScreen from '../screen/Dashboard/DashboardScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const AuthStack = () => {
	return (
		<Navigator
			initialRouteName="WelcomeScreen"
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					display: 'none',
				},
			}}>
			<Screen name="WelcomeScreen" component={WelcomeScreen} />
			<Screen name="SignUpScreen" component={SignUpScreen} />
			<Screen name="SignInScreen" component={SignInScreen} />
			<Screen name="DashboardScreen" component={DashboardScreen} />
		</Navigator>
	);
};

export default AuthStack;

const styles = StyleSheet.create({});
