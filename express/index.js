const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
	fs.readFile('./data/database.json', (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		}

		console.log(typeof data);
		res.write(data);
		next();
	});
});

app.post('/user', (req, res) => {
	fs.readFile('./data/database.json', (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		}

		const dbData = JSON.parse(data);
		dbData.push(req.body);
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

app.listen(6000, function () {
	console.log('Listening to port 3000');
});
