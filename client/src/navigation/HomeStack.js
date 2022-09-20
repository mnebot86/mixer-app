import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screen/Dashboard/DashboardScreen';
import BarScreen from '../screen/Bar/BarScreen';
import SettingsScreens from '../screen/Settings/SettingsScreens';
import { DrinkStack } from './DrinkStack';
const { Navigator, Screen } = createBottomTabNavigator();

const HomeStack = () => {
	return (
		<Navigator initialRouteName="DashboardScreen">
			<Screen name="DashboardScreen" component={DashboardScreen} />
			<Screen name="Bar" component={BarScreen} />
			<Screen name="SettingsScreen" component={SettingsScreens} />
			<Screen
				name="DrinkStack"
				component={DrinkStack}
				options={{
					headerShown: false,
					tabBarButton: () => null,
					tabBarVisible: false,
				}}
			/>
		</Navigator>
	);
};

export default HomeStack;

const styles = StyleSheet.create({});
