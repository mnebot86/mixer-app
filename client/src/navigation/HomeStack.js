import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screen/Dashboard/DashboardScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeStack = () => {
	return (
		<Navigator>
			<Screen name="DashboardScreen" component={DashboardScreen} />
		</Navigator>
	);
};

export default HomeStack;

const styles = StyleSheet.create({});
