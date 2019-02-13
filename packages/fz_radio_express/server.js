const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const logger = require('./lib/logger');
const router = require('./api');

const app = express();

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: 'true',
  }))
  .use(morgan('tiny', {
    stream: logger.stream,
  }));

app.use('/api', router);
app.use((req, res) => res.status(404).send('Sorry can\'t find that!'));

// Error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  if (err.isServer) {
    logger.error(`Server error: ${err}`);
  }
  return res.status(err.output.statusCode || 500).json(err.output.payload);
});

module.exports = app;
