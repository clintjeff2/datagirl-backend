const http = require('http');

http
	.createServer(function (req, res) {
		console.log('The client has sent a request');

		res.writeHead(201, { 'Content-Type': 'text/html' });

		res.end('<h1>Hello World, This is NodeJS</h1>');
		// res.end();
	})
	.listen(3000);
