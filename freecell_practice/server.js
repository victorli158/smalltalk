var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 9090});

wss.on('connection', function(connection) {
  console.log('user connected');

  connection.on('message', function(message){
    console.log("Got message from a user:", message);
  });

  connection.send("Hello from server");
})
