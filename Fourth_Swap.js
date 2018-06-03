var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let a = 10;
    let b = 30;
    let c;
    c = a;
    a = b;
    b = c;
   // res.end("Before swap "+a,b);
    res.end("After swap" + a,b);
	
}).listen(8080);