const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRoutes);

module.exports = app;
