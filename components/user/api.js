const express = require('express');
const controller = require('./controller');
const validation = require('./validation');
const userErrorHandler = require('./error');

const router = express.Router();

router.get('/', controller.get);
router.post('/', validation.checkUser, controller.post);

router.use(userErrorHandler);

module.exports = router;
