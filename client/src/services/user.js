import axios from 'axios';

const BASEURL = 'http://localhost:5000/api/v1';

export const SIGN_UP = async (credentials) => {
	try {
		const response = await axios.post(
			`${BASEURL}/auth/register`,
			credentials
		);

		return response.data;
	} catch (error) {
		return { error: error.response.data.msg };
	}
};

export const LOGIN = async (credentials) => {
	try {
		const response = await axios.post(`${BASEURL}/auth/login`, credentials);

		return response.data;
	} catch (error) {
		return { error: error.response.data.msg };
	}
};

export const verifyUser = async (token) => {
	try {
		const response = await axios.post(`${BASEURL}/auth/verifyUser`, {
			token,
		});

		return response.data;
	} catch (error) {
		return { error: error.response.data.msg };
	}
};
