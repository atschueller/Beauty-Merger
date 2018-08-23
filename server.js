const express = require("express");
const mongoose = require('mongoose');
const routes = require("./routes");
const bodyParser = require('body-parser');
var logger = require("morgan");

mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 3001;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use(routes);

mongoose.connect("mongodb://localhost/beautymerger");
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error:", error)
});

db.once("open", function() {
    console.log("Mongoose connection successful")
});


app.listen(PORT, function () {
    console.log('App listening on Port: ' + PORT)
});
