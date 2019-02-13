const express = require('express');

const router = express.Router();

router.get('/healthcheck', (req, res) => res.send('Service is up!'));

module.exports = router;
