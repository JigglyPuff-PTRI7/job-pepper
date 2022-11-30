/**
 * Configuring Strategy
 */
require("dotenv").config();
const { Console } = require("console");
const e = require("express");
// example oauth with express:
// https://github.com/passport/todos-express-google-oauth2/blob/master/routes/auth.js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("./db/connect.js");

//notes on serialized vs deserialized:
//https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
passport.serializeUser(function (user, done) {
  console.log("serialized user is =>", user.googleid);
  done(null, user.googleid);
});
//query user id when deserializing
passport.deserializeUser(function (userGoogleID, done) {
  console.log("deserialized user is =>", userGoogleID);
  const text = "SELECT * from users WHERE users.googleID=$1";
  const values = [userGoogleID];
  db.query(text, values)
    .then((res) => {
      console.log("same user in deserialized!");
      done(null, res.rows[0]);
    })
    .catch((err) => console.log(err));
  done(null, user);
});
passport.use(
  //called after user selects their login email from the front-end or Google auth
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    //determines the user to which the google acc belongs
    //if user logs in for first time => new user record created
    //subsequent logins, user record will be found via relation to the googleID
    function (request, accessToken, refreshToken, profile, done) {
      console.log("profile obj is =>", profile);
      //needed to create a new function to run insert query in order to offset lag
      function createUser(name) {
        insertQuery =
          "INSERT INTO users (email, user_name, googleID) VALUES($1, $2, $3 ) RETURNING *";
        const values = [profile._json.email, name, profile.id];
        //PROMISE BASED RESPONSE;
        // return db
        //   .query(insertQuery, values)
        //   .then((newUser) => {
        //     // done(null, newUser.rows[0]);
        //     console.log("checking new user", newUser.rows[0]);
        //   })
        //   .then((res) => done(null, res))
        //   .catch((err) => console.log(err));
        //CALLBACK HELL
        db.query(insertQuery, values, (err, newUser) => {
          if (err) {
            console.log(err);
          } else {
            console.log("newUser is =>", newUser.rows[0]);
            done(null, newUser.rows[0]);
          }
        });
      }
      //want to save profile.id, profile.name.displayName, profile._json.email
      const searchQuery = "SELECT * FROM users WHERE users.email=$1";
      const values = [profile._json.email];
      //PROMISE BASED WAY
      // userExists = db
      //   .query(searchQuery, values)
      //   .then((res) => {
      //     //if user record doesn't exist, create a new one
      //     if (!res.rows[0]) {
      //       createUser(profile.displayName);
      //     } else {
      //       return res.rows[0];
      //     }
      //   })
      //   .catch((err) => console.log(err));
      //CALLBACK HELL WAY
      db.query(searchQuery, values, (err, res) => {
        if (err) {
          console.log(err);
        }
        if (!res.rows[0]) {
          createUser(profile.displayName);
        } else {
          done(null, res.rows[0]);
        }
      });
    }
  )
);
