const express = require('express');
const api = require('./api');

const router = express.Router();

router.use('/user', api);

module.exports = {
  api: router,
};
