const Category = require('./../models/category.model');

exports.createCategory = async (req, res) => {
	try {
		const data = req.body;

		const category = await Category.create(data);

		res.status(201).json({ message: 'Success', category });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.getAllCategories = async (req, res) => {
	try {
		const categories = await Category.find();

		res.status(200).json({ message: 'success', categories });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.getCategory = async (req, res) => {
	try {
		const catId = req.params.id;

		// const category = await Category.find({ _id: catId });

		const category = await Category.findById(catId);
		res.status(200).json({ message: 'Success', category });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};
