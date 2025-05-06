const fs = require('fs');

exports.getAllUsers = (req, res) => {
	fs.readFile('./data/database.json', (err, data) => {
		const db = JSON.parse(data);

		res.status(200).json({
			results: db.length,
			data: db,
		});
	});
};

exports.createUser = (req, res) => {
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
};

exports.getUser = (req, res) => {
	const Id = req.params.userId;

	fs.readFile('./data/database.json', (err, data) => {
		const db = JSON.parse(data);

		const person = db.filter((user) => user.id == Id);

		res.status(200).json(person);
	});
};

exports.deleteUser = (req, res) => {
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
};

exports.login = (req, res) => {
	const data = req.body;

	fs.readFile('./data/database.json', (err, fileData) => {
		const db = JSON.parse(fileData);

		const user = db.filter((el) => el.email === data.email);

		if (user.length === 0) {
			return res.end('User with the provided email does not exist');
		}

		const dbPassword = user[0].password;

		if (dbPassword === data.password) {
			return res.status(200).json({ message: 'Successful Login' });
		} else {
			return res.end('Wrong Password, Try again!!');
		}
	});
};
