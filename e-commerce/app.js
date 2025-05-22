const express = require('express');

const {
	deleteStore,
	createStore,
	getStore,
	getAllStores,
	updateStore,
} = require('./controllers/store.controller');
const {
	createCategory,
	getAllCategories,
	getCategory,
} = require('./controllers/category.controller');
const userRoutes = require('./routes/user.routes');

const {
	login,
	protect,
	test1,
	restrictTo,
} = require('./controllers/auth.controller');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
	console.log('Our first middleware for today');

	next();
});

app.use((req, res, next) => {
	console.log('Our SECOND middleware for today');

	next();
});

app.use('/user', userRoutes);

app.post('/store', protect, createStore);
app.get('/store', getAllStores);
app.get('/store/:id', getStore);
app.patch('/store/:id', updateStore);
app.delete('/store/:id', deleteStore);

app.post('/category', protect, restrictTo(['seller', 'admin']), createCategory);
app.get('/category', getAllCategories);
app.get('/category/:id', getCategory);

app.get('/login', login);
app.post('/protect', test1, protect);

module.exports = app;
