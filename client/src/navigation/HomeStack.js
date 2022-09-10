import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screen/Dashboard/DashboardScreen';
import SettingsScreens from '../screen/Settings/SettingsScreens';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeStack = () => {
	return (
		<Navigator initialRouteName="DashboardScreen">
			<Screen name="DashboardScreen" component={DashboardScreen} />
			<Screen name="SettingsScreen" component={SettingsScreens} />
		</Navigator>
	);
};

export default HomeStack;

const styles = StyleSheet.create({});
