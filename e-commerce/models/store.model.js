const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, 'A store must have a name'],
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'user',
		required: [true, 'A store must belong to a particular user'],
	},
	location: {
		type: String,
		trim: true,
		required: [true, 'A store must have a location'],
	},
	tel: {
		type: Number,
		required: [true, 'A store must have some contact information'],
	},
	logo: {
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

const Store = mongoose.model('store', storeSchema);

module.exports = Store;
