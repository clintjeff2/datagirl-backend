const express = require('express');
const { createUser } = require('./controllers/user.controller');

const app = express();

app.use(express.json())

app.post('/user', createUser)

module.exports = app;

