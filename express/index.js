const express = require('express');

const {
	getAllUsers,
	createUser,
	getUser,
	deleteUser,
	login,
} = require('./controller/userController');

const app = express();

app.use(express.json());

//CREATE USER
app.post('/user', createUser);

//GET ALL USERS
app.get('/user', getAllUsers);

//GET A USER
app.get('/user/:userId', getUser);

app.delete('/user/:id', deleteUser);

app.post('/login', login);

app.listen(6000, function () {
	console.log('Listening to port 6000');
});
