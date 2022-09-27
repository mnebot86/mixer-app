import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { StyledInput, StyledButton } from '../components';

const CreateDrink = () => {
	const [drinkName, setDrinkName] = useState('');
	const [category, setCategory] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const [glass, setGlass] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [Instructions, setInstructions] = useState('');
	const [tags, setTags] = useState([]);

	const handleSubmit = async () => {
		const formData = {
			drinkName,
			category: [category],
			thumbnail,
			glass,
			ingredients,
			Instructions,
			tags,
		};

		console.log({ formData });
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text>Add Your Own Drink</Text>
			<StyledInput
				placeholder="Drink Name"
				onChangeText={setDrinkName}
				value={drinkName}
			/>

			<StyledInput
				placeholder="Category"
				onChangeText={setCategory}
				value={category}
			/>

			<StyledInput
				placeholder="Thumbnail"
				onChangeText={setThumbnail}
				value={thumbnail}
			/>

			<StyledInput
				placeholder="Glass"
				onChangeText={setGlass}
				value={glass}
			/>

			<StyledInput
				placeholder="Ingredients"
				onChangeText={setIngredients}
				value={ingredients}
			/>

			<StyledInput
				placeholder="Instructions"
				onChangeText={setInstructions}
				value={Instructions}
			/>

			<StyledInput
				placeholder="Tags"
				onChangeText={setTags}
				value={tags}
			/>

			<StyledButton title="Submit" onPress={handleSubmit} />
		</SafeAreaView>
	);
};

export default CreateDrink;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: '5%',
		backgroundColor: 'white',
	},
});
