const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: [true, 'A rating must have a value'],
		min: [1, 'Minimum is 1'],
		max: [5, 'Maximum is 5'],
	},
	product: {
		type: mongoose.Types.ObjectId,
		ref: 'product',
		required: [true, 'Ratings belong to a particular product'],
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

const Rating = mongoose.model('rating', ratingSchema);

module.exports = Rating;
