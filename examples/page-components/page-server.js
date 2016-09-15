const riot = require('riot');
const doctype = '<!doctype html>';
require('./tags/page-head.tag');
require('./tags/page-footer.tag');
require('./tags/page-navbar.tag');
require('./tags/single-post.tag');
require('./tags/page-posts.tag');
require('./tags/page-content.tag');
const layout = require('./page-layout.tag');

const html = riot.render(layout);

const http = require('http');
const PORT = 8000;

//Create a server
const server = http.createServer(function handleRequest (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(doctype + html);
});

//Lets start our server
server.listen(PORT, function () {
  //Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT);
});
