const {
  createLogger,
  format,
  transports,
} = require('winston');
const fs = require('fs');
const path = require('path');

const config = require('../config');

const logDir = 'log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const combinedFilename = path.join(logDir, 'express-api.log');
const errorFilename = path.join(logDir, 'express-api-error.log');

const logger = createLogger({
  level: config.logger.level,
  format: format.combine(
    format.label({
      label: path.basename(module.parent.filename),
    }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
  ),
  transports: [
    new transports.File({
      filename: combinedFilename,
      format: format.combine(
        format.printf(
          info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`,
        ),
      ),
      silent: process.env.NODE_ENV === 'test',
    }),
    new transports.File({
      level: 'error',
      filename: errorFilename,
      format: format.combine(
        format.printf(
          info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`,
        ),
      ),
      silent: process.env.NODE_ENV === 'test',
    }),
  ],
});

if (process.env.NODE_ENV !== 'production' && config.logger.enabled) {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.printf(
        info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`,
      ),
    ),
    silent: process.env.NODE_ENV === 'test',
  }));
}

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
