const http = require('https');
const fs = require('fs')

const hostname = 'localhost';
const port = 3000;

const enableCrossDomain = {
  'Access-Control-Allow-Origin': 'https://localhost',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'text/plain'
}

const server = http.createServer({
    key: fs.readFileSync(__dirname + '/ssl/server.key', 'utf-8'),
    cert: fs.readFileSync(__dirname  + '/ssl/server.crt', 'utf-8')
  }, (req, res) => {

    if (req.method === 'OPTIONS') {
      res.writeHead(204, enableCrossDomain);
      return res.end();
    }
    else
    {
      res.writeHead(200, enableCrossDomain);
      return res.end('Welcome to Node Chat Server');
    }
});

server.listen(port, hostname, (err) => {
  if (err) {
    return console.log(':: Internal Server Error ::', err)
  }
  console.log(`Server running at https://${hostname}:${port}/`);
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('broadcast-chat', (message) => {
    socket.emit('broadcast-chat-receieved', message);
  });
});