const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const handleUncaught = require('./handlers/uncaught');
// 컴포넌트 별로 계층을 나눈다.
const user = require('./components/user');

handleUncaught();

const app = express();

app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', user.api);

module.exports = app;
