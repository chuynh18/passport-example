"use strict";

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(new GoogleStrategy({
        // GoogleStrategy options
        callbackURL: "/auth/google/redirect",
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
    })
);