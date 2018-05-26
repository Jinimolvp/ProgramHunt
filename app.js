var http = require('http');
var prg1 = require("./ThirdProgram.js");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
    prg1.largest(req,res);
    console.log("hiii");
}).listen(8080);