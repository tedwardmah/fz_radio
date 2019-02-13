const mongoose = require('mongoose');
const config = require('../config');
const logger = require('../lib/logger');

exports.config = () => {
  mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(
    () => {
      logger.info('Mongo connection established successfully.');
    },
    (err) => {
      logger.error(`Error connecting to Mongo: ${err.message}.`);
    },
  );
};
