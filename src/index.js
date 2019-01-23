const http = require('http');
const { port, env } = require('./config/vars');
const app = require('./config/express');
const server = http.createServer(app);

server.listen(port, () => {
  console.info(`server started on port ${port} (${env})`);
});

exports.server = server;
