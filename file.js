const http = require('http');
const fs = require('fs');

http
	.createServer((req, res) => {
		if (req.url === '/create-file') {
			fs.open('new.txt', 'w', function (err) {
				//write
				if (err) {
					console.log(err);
					res.end('An error occured');
				}

				res.end('File created successfully');
			});
		} else if (req.url === '/write-file') {
			fs.writeFile(
				'new2.txt',
				'I am writing to this file for the first time',
				function (err) {
					if (err) {
						console.log(err);
						res.end('An error occurred');
					}
					res.end('the file was written to');
				}
			);
		}
	})
	.listen(5000);
