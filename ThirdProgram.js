/*exports.largest = function(req,res) {
	let a = 10;
	let b = 50;
	let c = 30;
	let greatest;
    if(a > b && a >c ) {
		console.log(a +" is greater");
	} else if( b > a && b > c) {
		console.log(b+" is greater");
	} else {
		console.log(c +" is greater");
	}
}*/
var http = require('http');
//var prg1 = require("./ThirdProgram.js");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end('Hello World!');
    let a = 10;
	let b = 50;
	let c = 30;
	let greatest;
    if(a > b && a >c ) {
		 res.end(a +" is greater");
	} else if( b > a && b > c) {
		 res.end(b+" is greater");
	} else {
		 res.end(c +" is greater");
	}
}).listen(8080);