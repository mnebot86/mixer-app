import { StyleSheet } from 'react-native';
import AuthStack from './AuthStack';

const MainNavigation = () => {
	return (
		<>
			<AuthStack />
		</>
	);
};

export default MainNavigation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
