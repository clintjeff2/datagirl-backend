const http = require('http');
const url = require('url');
const fs = require('fs');

http
	.createServer((req, res) => {

    
		// const myUrl =
		// 	'https://w3schools.com:7000/html/paragraphs?day=34&year=2021&name=casio';

		// const formatedUrl = url.parse(myUrl, true);
		// console.log(formatedUrl);
		// console.log(url.parse)
	})
	.listen(6000);

// https://w3schools.com

// https://w3schools.com/html/headings

// https://w3schools.com/html/paragraphs?day=34

// https://w3schools.com/html/paragraphs?day=34&year=2021&name=casio
