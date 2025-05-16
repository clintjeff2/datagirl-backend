const Product = require('./../models/product.model');

exports.createProduct = async (req, res) => {
	try {
		const data = req.body;

		const user = await Product.create(data);

		res.status(201).json({ message: 'Successs in creating product' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed to create product', error: err });
	}
};

exports.getProduct = async (req, res) => {
	try {
		const productId = req.params.id;

		const product = await Product.find({ _id: productId });

		res.status(200).json({ message: 'Success', product });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get product', err });
	}
};

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find().populate('owner');

		res
			.status(200)
			.json({ message: 'success', results: products.length, products });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get all products', err });
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const productId = req.params.id;
		const data = req.body;

		const product = await Product.findByIdAndUpdate(productId, data, { new: true });

		res.status(200).json({ message: 'success', product });
	} catch (err) {
		res.status(500).json({ message: 'Failed  to update product', err });
	}
};

exports.deleteProduct = async (req, res) => {
	try {
		const productId = req.params.id;

		await Product.findByIdAndDelete(productId);

		res.status(204).json({ message: 'Deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Failed to delete product' });
	}
};
