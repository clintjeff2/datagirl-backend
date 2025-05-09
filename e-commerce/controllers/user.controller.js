const User = require('./../models/user.model');

exports.createUser = async (req, res) => {
	try {
		// res.write('Received Request to Create User');
		const data = req.body;

		const user = await User.create(data);
		// const user = new User(data)
		// user.save();

		res.status(201).json({ message: 'Successs in creating user' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed', error: err });
	}
};

exports.getUser = async (req, res) => {
	try {
		const userId = req.params.id;

		const user = await User.find({ _id: userId });
		// const user = await User.findById(userId);

		res.status(200).json({ message: 'Success', user });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find();

		res.status(200).json({ message: 'success', results: users.length, users });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const userId = req.params.id;
		const data = req.body;

		const user = await User.findByIdAndUpdate(userId, data);
		// const user = await User.findOneAndUpdate({_id: userId}, data)

		res.status(200).json({ message: 'success', user });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.generateExcel = async (req, res) => {
	
}