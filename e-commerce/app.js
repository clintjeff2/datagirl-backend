const express = require('express');
const {
	createUser,
	getUser,
	getAllUsers,
	updateUser,
} = require('./controllers/user.controller');
const {
	deleteStore,
	createStore,
	getStore,
	getAllStores,
	updateStore,
} = require('./controllers/store.controller');

const app = express();

app.use(express.json());

app.post('/user', createUser);
app.get('/user', getAllUsers);
app.get('/user/:id', getUser);
app.patch('/user/:id', updateUser);

app.post('/store', createStore);
app.get('/store', getAllStores);
app.get('/store/:id', getStore);
app.patch('/store/:id', updateStore);
app.delete('/store/:id', deleteStore);

module.exports = app;
