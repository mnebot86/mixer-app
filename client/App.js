import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainContainer from './src/MainContainer';

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.container}>
				<MainContainer />
			</SafeAreaView>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
