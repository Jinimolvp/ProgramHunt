var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let a = 10;
    let b = 30;
    let c = 100;
    let avg = (a+b+c)/3;
    res.end("Average of Three numbers" + avg);
	
}).listen(8080);