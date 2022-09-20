import axios from 'axios';

const BASEURL = 'http://localhost:5000/api/v1';

export const getAllDrinks = async () => {
	const response = await axios.get(`${BASEURL}/drinks`);
	return response.data;
};

export const getOneDrink = async (id) => {
	const response = await axios.get(`${BASEURL}/drinks/${id}`);
	return response.data;
};
