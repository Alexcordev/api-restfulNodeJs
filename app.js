const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

 
app.get('/', function (req, res) {
  res.send('<h1>Mes projets</h1>');
});
 
module.exports = app;