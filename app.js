var express = require("express");
var path = require("path");
var fs = require("fs");
const { ArgumentOutOfRangeError } = require("rxjs");

//Express

var app = express;
var PORT = process.env.PORT || 3000;

// start servera

app.listen(PORT, function () {
  console.log("Listening on port" + PORT);
});
