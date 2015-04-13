var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
<<<<<<< HEAD
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
=======
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
       reply('hello world');
    }
});

// Start the server
server.start();

var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
       reply('hello world');
    }
});

// Start the server
server.start();
>>>>>>> 9b5785be4ccaa84d085a04f83853979d5b7f8482
