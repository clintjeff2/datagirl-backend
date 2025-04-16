const http = require('http');

http
	.createServer((req, res) => {
		if (req.url === '/create') {
			//detected
		} else if (req.url === '/write') {
			//detected
		}
	})
	.listen(9000);
