const express = require("express");
const mongoose = require('mongoose');
const routes = require("/routes");
const bodyParser = require('body-parser');
var logger = require("morgan");
const PORT = process.env.PORT || 3001;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beautymerger")


app.listen(PORT, function () {
    console.log('App listening on Port: ' + PORT)
});
