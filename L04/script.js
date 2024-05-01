var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
	var query = url.parse(request.url, true);
	console.log(query);
	var filename = "." + query.pathname;
	console.log(filename);
	fs.readFile(filename, function (error, data) {
		console.log(error);
		if (error) {
			response.writeHead(404, {'Content-Type': 'text/html'});
			return response.end("404 Not Found");
		}
		response.writeHead(200);
		response.write(data);
		return response.end();
	});
}).listen(8080);