const createDrink = async (req, res) => {
	res.send('create drink');
};

const getDrink = async (req, res) => {
	res.send('get a drink');
};

const getAllDrinks = async (req, res) => {
	res.send('get all drinks');
};

const updateDrink = async (req, res) => {
	res.send('update drink');
};

const deleteDrink = async (req, res) => {
	res.send('delete drink');
};

export { createDrink, deleteDrink, getAllDrinks, updateDrink, getDrink };
