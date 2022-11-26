
/**
 * Configuring Strategy
 */
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config();
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback: true
  },
  function(request,accessToken, refreshToken, profile, done) {
    // console.log("accessToken ", accessToken)
    //  console.log("profile ", profile)
     //console.log("request ", request)

    return done(null, profile)
    // If using DB later, create USER obj then create or save user to DB

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));