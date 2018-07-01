"use strict";
const authRoutes = require("express").Router();
const passport = require("passport");
const db = require("../api/db");

// Routes

// login with Google
authRoutes.get("/google", 
passport.authenticate("google", {
    scope: ["profile"]
})
);

// redirect after logging in with Google
authRoutes.get("/google/redirect",
passport.authenticate("google"),
(req, res) => {
    res.send("nice");
});

module.exports = authRoutes;