const WebSocket = require('ws');

const PORT = 8080;
//TODO: Setup WebSocket server on given port
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    // Broadcast to everyone
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

console.log(`Started Websockets server on port ${PORT}`)