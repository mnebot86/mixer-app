import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Button,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setParamId, setParamName } from '../redux/slices/paramSlice';
import { updateUser } from '../services/user';

const DrinkCard = ({ name, thumbNail, category, _id }) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);
	const userId = user.user.user?._id;
	const userFavorites = user.user.user?.favorites || [];
	const [isRed, setIsRed] = useState(false);

	const onPressHandle = () => {
		dispatch(setParamId(_id));
		dispatch(setParamName(name));
		navigation.navigate('DrinkStack', {
			screen: 'DrinkDetailScreen',
		});
	};

	const toggleFavoriteHandle = async (id) => {
		let updateFavorite;

		if (userFavorites.length === 0) {
			updateFavorite = {
				favorites: [id],
			};
		} else if (userFavorites.includes(id)) {
			updateFavorite = {
				favorites: [userFavorites.filter((item) => item !== id)],
			};
		} else {
			updateFavorite = {
				favorites: [...userFavorites, id],
			};
		}

		await updateUser(userId, updateFavorite);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={onPressHandle}>
			<Image
				source={{ url: thumbNail }}
				style={styles.image}
				accessibilityLabel={name}
			/>

			<View style={styles.textContainer}>
				<Text>{name}</Text>
				{category.map((item, idx) => (
					<Text key={`category-${idx}`}>{item}</Text>
				))}

				<Button title="+" onPress={() => toggleFavoriteHandle(_id)} />
			</View>
		</TouchableOpacity>
	);
};

export default DrinkCard;

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
		flexDirection: 'row',
		shadowColor: 'black',
		shadowOffset: { width: 2, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: '8%',
	},
	textContainer: {
		width: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
