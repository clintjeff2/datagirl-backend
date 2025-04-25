exports.getAllUsers = (req, res) => {
	fs.readFile('./data/database.json', (err, data) => {
		const db = JSON.parse(data);

		// res.send({
		// 	results: db.length,
		// 	data: db,
		// });
		// res.end();

		res.status(200).json({
			results: db.length,
			data: db,
		});
	});
};

