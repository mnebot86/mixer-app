import { createStackNavigator } from '@react-navigation/stack';
import DrinkDetailsScreen from '../screen/DrinkDetails/DrinkDetailsScreen'
const { Navigator, Screen } = createStackNavigator();

export const DrinkStack = () => {
	return (
		<Navigator>
			<Screen name="DrinkDetailScreen" component={DrinkDetailsScreen} />
		</Navigator>
	);
};
