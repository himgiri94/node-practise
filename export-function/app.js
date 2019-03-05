var http = require('http');
var dateFun = require('../node/exportDate');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('This example is different!');
  res.end(dateFun.myDateTime());
}).listen(8080);