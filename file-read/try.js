var http = require('http');
var readd = require('./file');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // console.log(req);
    res.write(readd.reading());
    res.write('<br>');
    res.end('i am done');
}).listen(8081);