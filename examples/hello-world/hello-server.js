var riot = require('riot');
var doctype = '<!doctype html>';
var hello = require('./hello.tag');
var html = riot.render(hello, { name: 'World' });

var http = require('http');
var port = 8000;
var host = 'localhost';

function handleRequest (request, response) {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.end(doctype + html);
};

var server = http.createServer(handleRequest);

server.listen({ port: port, host: host }, function () {
  console.log('Server listening on: http://localhost:' + port);
});
