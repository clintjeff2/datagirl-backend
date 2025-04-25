const express = require('express');
const fs = require('fs');
const { getAllUsers } = require('./controller/userController');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
// 	fs.readFile('./data/database.json', (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			res.end();
// 		}
// 		next();
// 	});
// });

//CREATE USER
app.post('/user', (req, res) => {
	fs.readFile('./data/database.json', (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		}

		const dbData = JSON.parse(data);
		const id = dbData.length + 1;
		dbData.push(req.body);
		req.body.id = id;
		fs.writeFile('./data/database.json', JSON.stringify(dbData), (err) => {
			if (err) {
				console.log(err);
				res.end();
			}
			console.log(req.body);
			res.write('arrived the post request');
			res.end();
		});
	});
});

//GET ALL USERS
app.get('/user', getAllUsers);

//GET A USER
app.get('/user/:userId', (req, res) => {
	const Id = req.params.userId;

	fs.readFile('./data/database.json', (err, data) => {
		const db = JSON.parse(data);

		const person = db.filter((user) => user.id == Id);

		res.status(200).json(person);
	});
});

app.delete('/user/:id', (req, res) => {
	const id = req.params.id;

	fs.readFile('./data/database.json', (err, data) => {
		const db = JSON.parse(data);

		const newUsers = db.filter((user) => user.id != id);

		fs.writeFile('./data/database.json', JSON.stringify(newUsers), (err) => {
			if (err) {
				console.log(err);
				res.end('An error occured');
			}

			res.status(204).json({ message: 'Deleted successfully' });
		});
	});
});

app.listen(6000, function () {
	console.log('Listening to port 3000');
});
