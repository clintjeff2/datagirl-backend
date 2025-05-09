const Store = require('./../models/store.model');

exports.createStore = async (req, res) => {
	try {
		const data = req.body;

		const user = await Store.create(data);

		res.status(201).json({ message: 'Successs in creating store' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed to create store', error: err });
	}
};

exports.getStore = async (req, res) => {
	try {
		const storeId = req.params.id;

		const store = await Store.find({ _id: storeId });

		res.status(200).json({ message: 'Success', store });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get store', err });
	}
};

exports.getAllStores = async (req, res) => {
	try {
		const stores = await Store.find().populate('owner');

		res
			.status(200)
			.json({ message: 'success', results: stores.length, stores });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get all stores', err });
	}
};

exports.updateStore = async (req, res) => {
	try {
		const storeId = req.params.id;
		const data = req.body;

		const store = await Store.findByIdAndUpdate(storeId, data, { new: true });

		res.status(200).json({ message: 'success', store });
	} catch (err) {
		res.status(500).json({ message: 'Failed  to update store', err });
	}
};

exports.deleteStore = async (req, res) => {
	try {
		const storeId = req.params.id;

		await Store.findByIdAndDelete(storeId);

		res.status(204).json({ message: 'Deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Failed to delete store' });
	}
};
