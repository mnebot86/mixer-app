import axios from 'axios';

const BASEURL = 'http://localhost:5000/api/v1';

export const SIGN_UP = async (credentials) => {
	try {
		const response = await axios.post(
			`${BASEURL}/auth/register`,
			credentials
		);

		return response?.data;
	} catch (error) {
		return { error: error.response.data.msg };
	}
};
