const db = require('./db');
const common = require('./common');
const logger = require('./logger');
const server = require('./server');

module.exports = Object.assign({}, db, common, logger, server);
