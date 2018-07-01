"use strict";

// =============================== dependencies ================================
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const passportSetup = require("./app/config/passport-setup");

// ============================= other boilerplate =============================
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./app/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// set up Express.js to use express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ================================= ROUTES ====================================
// auth routes
const authRoutes = require("./app/routes/auth");
app.use("/auth", authRoutes);

// html routes
const htmlRoutes = require("./app/routes/html");
app.use("/", htmlRoutes);

// ============================= EXPRESS.js LISTEN =============================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});