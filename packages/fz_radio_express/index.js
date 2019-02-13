require('dotenv').config();

const http = require('http');
const logger = require('./lib/logger');
const config = require('./config');
const app = require('./server');

// Mongoose setup
require('./setup/mongoose').config();

const server = http.createServer(app);
server.listen(config.port, () => logger.info(`App is listening on port ${config.port}!`));

module.exports = server;
