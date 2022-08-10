var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log("Server running at http://localhost:%d" , port);
