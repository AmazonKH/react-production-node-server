const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;
