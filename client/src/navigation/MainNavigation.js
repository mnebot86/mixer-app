import { StyleSheet } from 'react-native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
	const { isSignedIn } = useSelector((state) => state.user);
	return <>{isSignedIn ? <HomeStack /> : <AuthStack />}</>;
};

export default MainNavigation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
