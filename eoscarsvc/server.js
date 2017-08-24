var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  UserData = require('./api/models/eoscarsvcModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserDatadb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/eoscarsvcRoutes');
routes(app);

app.listen(port);

console.log('eoscarsvc RESTful API server started on: ' + port);