import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { getOneDrink } from '../../services/drink';

const DrinkDetailsScreen = () => {
	const { id } = useSelector((state) => state.param);

	const [drink, setDrink] = useState({});

	useEffect(() => {
		const fetchDrink = async (id) => {
			const response = await getOneDrink(id);
			setDrink(response.drink);
		};

		fetchDrink(id);
	}, []);

	console.log(drink);

	const {
		category,
		glass,
		ingredients,
		instructions,
		name,
		tags,
		thumbNail,
		video,
	} = drink;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{name}</Text>
			<Text>{category}</Text>

			<Image source={{ uri: thumbNail }} style={styles.img} />

			{ingredients?.map((ingredient, idx) => {
				console.log(ingredient.amount);
				return (
					<Text key={`ingredient-${idx}`} style={styles.text}>
						{ingredient.amount} {ingredient.name}
					</Text>
				);
			})}

			<Text>{glass}</Text>

			<Text>{instructions}</Text>
		</View>
	);
};

export default DrinkDetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontSize: 40,
		textAlign: 'center',
		paddingTop: 15,
		fontWeight: 'bold',
		paddingBottom: 15,
	},
	img: {
		width: 400,
		height: 350,
	},
	text: {
		color: 'blue',
	},
});
