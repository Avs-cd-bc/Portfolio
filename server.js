'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var port = 8081;
var app = (0, _express2.default)(); //we need an instance of express

app.use(_express2.default.static("dist"));

//our index location - the starting point for our site
app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, './dist/index.html'));
});

app.get("styles.css", function (req, res) {
  res.sendFile(_path2.default.join(__dirname, "./dist/styles.css"));
});

app.get("bundle.js", function (req, res) {
  res.sendFile(_path2.default.join(__dirname, "./dist/bundle.js"));
});

// we are starting up express, listening on the port specified above
// and we open the browser, using the "open" package which is on npm
app.listen(port);
