import { StyleSheet, View } from 'react-native';
import MainContainer from './src/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<NavigationContainer>
					<MainContainer />
				</NavigationContainer>
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
