const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.use((req, res,) => {
  res.status(404).send('<h1>Page not found<h1>');
});

app.listen(3000);
