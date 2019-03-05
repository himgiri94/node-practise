// var http = require('http');
var fs = require('fs');

// http.createServer((req, res)=>{

//     res.writeHead(200);
//     fs.readFile('test.html', (err, data) => {

//         res.write(data);
//         console.log('done');
//         res.end();

//     });

// }).listen(8082);

exports.reading = function() {
    fs.readFile('test.html', (err, data) => {
        return data;
    });
} 