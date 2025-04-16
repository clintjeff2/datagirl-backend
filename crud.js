const http = require('http');

http
	.createServer((req, res) => {
		res.writeHead(201, { 'Content-Type': 'text/html' });

		if (req.url === '/users') {
			res.write('<h1>All users have been retrieved!</h1>');
		} else if (req.url === '/products') {
			res.write('<h2>All products have been returned</h2>');
		} else {
			res.write('<h1>You missed the route</h1>');
		}

		res.end('A request was made');
	})
	.listen(8080);

// localhost:8080
//HTTP METHODS - GET, POST, PATCH, PUT, DELETE,
