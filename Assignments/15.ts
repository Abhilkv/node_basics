var http = require('http');
var url = require('url');


const empData = {
    empid: 2292,
    name: 'abhil',
    dept: 'tech',
    designation: 'Sr.Soft.Engg'
};

http.createServer((req, res) => {
    var pathName = url.parse(req.url).pathname;

    console.log(pathName);

    if (pathName === '/getData') {
        // res.writeHead(200, {'Content-Type': 'text/html'});
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(empData));
        // res.writeHead(200, {'Content-Type': 'application/json'});
        // res.write(empData);
    } else {
        res.writeHead(400, {'Content-Type': 'text/html'})
    }
    res.end();
}).listen(8081);
