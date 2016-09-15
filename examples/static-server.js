var Hapi = require('hapi');
var server = new Hapi.Server();
var port = process.env.PORT || 8000;

server.connection({ port: port });

server.register(require('inert'), function () {
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: { path: require('path').normalize(__dirname + '/'), listing: true }
    }
  });
});

server.start(function () {
  console.log('Static Server Listening on : http://127.0.0.1:' +port);
});
