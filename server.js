var express = require("express");
var mongojs = require("mongojs");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 3001;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var databaseUrl = "beautyproducts";
var collections = ["products"];

var db = mongojs(databaseUrl, collections);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beautyproducts")

db.on("error", function (error) {
    console.log("Database Error:", error);
});


app.listen(PORT, function () {
    console.log('App listening on Port: ' + PORT)
});
