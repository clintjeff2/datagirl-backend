const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//creating a schema
const userSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: [true, 'A user must have a fullname'],
		trim: true,
		minlength: [10, 'fullname should be longer than 10 characters'],
		maxlength: [15, 'fullname should be shorter than 15 characters'],
	},
	email: {
		type: String,
		required: [true, 'A user must have an email'],
		unique: true,
	},
	tel: {
		type: Number,
	},
	password: {
		type: String,
		minlength: [8, 'Password should be atleast 8 characters'],
		required: [true, 'A user must provide a password'],
	},
	confirmPassword: {
		type: String,
		required: [true, 'Provide password confirmation'],
	},
	address: {
		type: String,
		required: [true, 'A user must have an address'],
	},
	gender: {
		type: String,
		enum: {
			values: ['Male', 'Female'],
			message: 'A user must be a Male or a Female',
		},
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

//MIDDLEWARES IN MONGOOSE
// userSchema.pre || userSchema.post
userSchema.pre('save', async function (next) {
	console.log(this);
	//check if passwords match
	if (this.password === this.confirmPassword) {
		//encrypt password
		const saltRounds = 10;
		const encryptedPassword = await bcrypt.hash(this.password, saltRounds);
		this.password = encryptedPassword;

		//Remove confirmPassword from data
		this.confirmPassword = undefined;
	} else {
		throw new Error('Passwords do not match, please try again');
	}

	next();
});
// userSchema.post('save', function(next){})

// userSchema.pre('find', function(next){})
// userSchema.post('find', function(next){})

const User = mongoose.model('user', userSchema);

module.exports = User;
