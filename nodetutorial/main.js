var http = require("http");

http.createServer(function(request, response){
	//http response header is sent, 
	//with status 200/ok, and content type text/plain
	response.writeHead(200,{'Content-Type':'text/plain'})
	//response body
	response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');