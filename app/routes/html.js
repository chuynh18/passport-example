"use strict";
const htmlRoutes = require("express").Router();

// Routes
htmlRoutes.get("/", (req, res) => {
    res.render("index");
});

module.exports = htmlRoutes;