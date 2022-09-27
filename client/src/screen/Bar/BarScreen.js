import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { CreateDrink } from '../../components';

const BarScreen = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<View style={styles.container}>
			<Text>Favorite</Text>
			<Text onPress={() => setIsModalVisible(!isModalVisible)}>
				Create
			</Text>
			<Modal
				animationType="slide"
				transparent={true}
				visible={isModalVisible}>
				<CreateDrink />
			</Modal>
		</View>
	);
};

export default BarScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
