import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import DrinkDetailsScreen from '../screen/DrinkDetails/DrinkDetailsScreen';

const { Navigator, Screen } = createStackNavigator();

export const DrinkStack = () => {
	const { name } = useSelector((state) => state.param);

	return (
		<Navigator>
			<Screen
				name="DrinkDetailScreen"
				component={DrinkDetailsScreen}
				options={{ title: name }}
			/>
		</Navigator>
	);
};
