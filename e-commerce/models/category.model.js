const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A category must have a name'],
	},
	description: {
		type: String,
		required: [true, 'A category must have a description'],
		maxlength: [80, 'A categories description is 80 characters max'],
	},
	categoryImage: {
		type: String,
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

const Category = mongoose.model('category', categorySchema);

module.exports = Category;
