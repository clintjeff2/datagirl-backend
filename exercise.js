const http = require('http');
const url = require('url');
const fs = require('fs');

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.map((e) => console.log(e));

// world wide web consortium

http
	.createServer((req, res) => {
		const urlObj = url.parse(req.url, true);
		console.log(req);

		console.log(req.url, urlObj);

		// if (urlObj.pathname === '/create') {
		// 	const filename = urlObj.query.name;
		// 	const fileContent = urlObj.query.content;

		// 	fs.writeFile(filename + '.txt', fileContent, function (err) {
		// 		if (err) {
		// 			console.log(err);
		// 			res.writeHead(404, { 'Content-Type': 'text/html' });
		// 			res.end('<strong>An error occured while creating file</strong>');
		// 		}

		// 		res.writeHead(201, { 'Content-Type': 'text/html' });
		// 		res.end('<h1>File Successfully Created!!!</h1>');
		// 	});
		// } else if (urlObj.pathname === '/read') {
		// 	const filename = urlObj.query.name;

		// 	fs.readFile(filename + '.txt', function (err, data) {
		// 		if (err) {
		// 			console.log(err);
		// 			res.end('Ooops!!! An error eoccured.');
		// 		}

		// 		res.write(data);
		// 		res.end('Successful request');
		// 	});
		// } else if (urlObj.pathname === '/update') {
		// 	const filename = urlObj.query.name;
		// 	const content = urlObj.query.content;

		// 	fs.appendFile(filename + '.txt', content, function (err) {
		// 		if (err) {
		// 			console.log(err);
		// 			res.end('An error occured');
		// 		}

		// 		res.end('Succesfully added content to the file');
		// 	});
		// } else if (urlObj.pathname === '/delete') {
		// 	const filename = urlObj.query.name;

		// 	fs.unlink(filename, function (err) {
		// 		if (err) {
		// 			res.writeHead(404, { 'content-type': 'text/plain' });
		// 			res.end('Error');
		// 		}

		// 		res.end('Succesffuly deleted');
		// 	});
		// }
	})
	.listen(4000);

// https://whatsapp.com:8000/send
// https://whatsapp.com:8000/profile/update
//  https://localhost:5173
//  https://localhost:3000

// localhost: 4000;
// localhost: 4000 / yam;
// localhost: 4000 / anythin / another / lkjdfkl / lkajsdf;
