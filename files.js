const http = require('http');
const url = require('url');
const fs = require('fs');

http
	.createServer((req, res) => {
		const myObj = url.parse(req.url, true);

		console.log(myObj);
	})
	.listen(4000);
