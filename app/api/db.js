"use strict";

const mongoose = require("mongoose");

// Set up and connect to MongoDB
mongoose.Promise = Promise;
mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/authTest"), () => {
    console.log("connected to MongoDB")
});

// Require all models
var mongo = require("../models");

var db = {

};

module.exports = db;