var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let a = 10;
	if(a%2 == 0) {
		res.end(a +" Is even");
	} else {
		res.end(a + " Is odd");
	}
	
}).listen(8080);