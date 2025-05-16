const Category = require('./../models/category.model');

exports.createCategory = async (req, res) => {
	try {
		const data = req.body;
		console.log(req.authUser);

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

exports.updateCategory = async (req, res) => {
	try {
		const catId = req.params.id;
		const data = req.body;

		const category = await Category.findByIdAndUpdate(catId, data, {
			new: true,
		});

		res.status(200).json({ message: 'success', category });
	} catch (err) {
		res.status(500).json({ message: 'Failed  to update category', err });
	}
};

exports.deleteCategory = async (req, res) => {
	try {
		const catId = req.params.id;

		await Category.findByIdAndDelete(catId);

		res.status(204).json({ message: 'Deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Failed to delete category' });
	}
};
