const mongoose = require('mongoose');

//creating a schema
const userSchema = new mongoose.Schema({
	fullname: String,
	email: {
		type: String,
		required: [true, 'A user must have an email'],
	},
	password: String,
	confirmPassword: String,
	address: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
