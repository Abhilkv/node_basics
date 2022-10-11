var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/

  var q = url.parse(req.url, true).query;
  res.write((req.url));
  /*Return the year and month from the query object:*/
  var txt = '___year: ' + q.year + " Month: " + q.month;
  res.end(txt);
}).listen(8080);

//http://localhost:8080/?year=2017&month=July
console.log("server is running on port 8081")