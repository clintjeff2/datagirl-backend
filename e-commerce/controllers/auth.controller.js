const User = require('./../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
	try {
		const data = req.body;
		const userData = await User.findOne({ email: data.email });

		if (userData === null) {
			res
				.status(404)
				.json({ message: 'User not found with this email, try again!' });
		}

		const isCorrect = await bcrypt.compare(data.password, userData.password);

		if (!isCorrect) {
			res.status(400).json({ message: 'Incorrect password, try again' });
		}

		//create token
		const token = await jwt.sign(
			{ id: userData._id },
			'my-very-secured-secret',
			{
				expiresIn: '10m', //10h 10 10m 10d 10y
			}
		);

		res
			.status(200)
			.json({ message: 'Login successfull', userData, authToken: token });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.protect = async (req, res) => {
	try {
		const token = req.body.token;

		const tokenVerify = await jwt.verify(token, 'my-very-secured-secret');

		res
			.status(200)
			.json({ message: 'User is logged in', payload: tokenVerify });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};
