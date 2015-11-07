var riot  = require('riot');

require('./page-head.tag');
require('./page-content.tag');
var layout  = require('./page-layout.tag');

var html  = riot.render(layout);
// console.log(html);
// module.exports = hello;
var http = require('http');
var PORT = 8000;
//Create a server
var server = http.createServer(function handleRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
});

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
