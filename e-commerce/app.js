const express = require('express');
const {
	createUser,
	getUser,
	getAllUsers,
	updateUser,
} = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.post('/user', createUser);
app.get('/user', getAllUsers);
app.get('/user/:id', getUser);
app.patch('/user/:id', updateUser);

module.exports = app;
