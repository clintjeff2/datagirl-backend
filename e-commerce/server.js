const mongoose = require('mongoose');
const app = require('./app');

const connectToDb = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/e_commerce');
		console.log('Connected to Database E-Commerce');
	} catch (err) {
		console.log('Error Connecting to database: ', err);
	}
};

connectToDb();

app.listen(4000, () => {
	console.log('Listening to port 4000');
});
