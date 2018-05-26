var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
   // let fmt = "DD/MM/YY, h:mm A";
	//var  today = new Date();
	//var dd = today.getDate();
	//res.end(dd);
	var moment = require('moment-timezone');
	//var fmt   = "MM-DD-YYYY h:mm:ss A";  
	var fmt = "DD/MM/YY, h:mm A";
	var timeInUTC=new Date();
	timeInUTC = moment().utcOffset("+05:30").format();
	res.end(timeInUTC);
}).listen(8080);