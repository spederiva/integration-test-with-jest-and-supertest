const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Parsing application/json
app.use(bodyParser.json());

//Routes
app.use('/', require('./routes/isAlive'));
app.use('/', require('./routes/user'));

module.exports = app;