const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A product must have a name'],
	},
	store: {
		type: mongoose.Types.ObjectId,
		ref: 'store',
		required: [true, 'A product should belong to a store'],
	},
	price: {
		type: Number,
		required: [true, 'A product should have a price'],
	},
	stock: {
		type: Number,
		required: [true, 'A stock quantity is required'],
		min: [0, 'Minimum value for a stock should be 0'],
	},
	currency: {
		type: String,
		required: [true, 'A product price should be in a currency'],
	},
	currencySymbol: {
		type: String,
	},
	image: {
		type: String,
	},
	category: {
		type: mongoose.Types.ObjectId,
		ref: 'category',
		required: [true, 'A product must belong to a category'],
	},
	isAvailable: {
		type: Boolean,
		default: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	updatedAt: {
		type: Date,
		default: Date.now(),
	},
});

//updated isAvailable depending on stock

const Product = mongoose.model('product', productSchema);

module.exports = Product;
