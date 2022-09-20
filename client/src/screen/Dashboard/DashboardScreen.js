import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { getAllDrinks } from '../../services/drink';
import { DrinkCard } from '../../components';

const DashboardScreen = ({ navigation }) => {
	const [drinks, setDrinks] = useState();

	useEffect(() => {
		const fetchDrinks = async () => {
			const getDrinks = await getAllDrinks();
			setDrinks(getDrinks.drinks);
		};

		fetchDrinks();
	}, []);

	return (
		<FlatList
			data={drinks}
			keyExtractor={(item) => item._id}
			initialNumToRender={20}
			renderItem={({ item }) => (
				<DrinkCard key={item.id} {...item} navigation={navigation} />
			)}
			contentContainerStyle={styles.list}
		/>
	);
};

export default DashboardScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'lightgrey',
		marginVertical: 10,
		borderRadius: '8%',
	},
	image: {
		width: 50,
		height: 50,
	},
	list: {
		justifyContent: 'center',
		paddingHorizontal: 5,
	},
});
