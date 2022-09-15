import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setParamId } from '../redux/slices/paramSlice';

const DrinkCard = ({ name, thumbNail, category, _id }) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const onPressHandle = () => {
		dispatch(setParamId(_id));
		navigation.navigate('DrinkStack', {
			screen: 'DrinkDetailScreen',
		});
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
