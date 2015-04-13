var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: 8080,
    routes: {cors: true}
});

var plugins = [{ register: require('./routes/quotes.js') }];

server.register(plugins, function (err) {
  if (err) { throw err; }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});