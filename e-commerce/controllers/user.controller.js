const User = require('./../models/user.model');

exports.createUser = async (req, res) => {
	try {
		// res.write('Received Request to Create User');
		const data = req.body;

		console.log(data);
		const user = await User.create(data);

		res.status(200).json({ message: 'Successs in creating user' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed', error: err });
	}
};
