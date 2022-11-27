const express = require('express')
require('dotenv').config();
const authRoutes = require('./routes/auth')
const path = require('path')
const cookieSession = require('cookie-session')
const session= require('express-session')

const cors = require('cors')
const passport = require('passport');
const passportSetup = require('./passport')
const app = express();
const PORT = 3434;


//used to parse incoming requests accordingly
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//What is this for?---cookie-session has a known issue with "regenerate"-->use"expression-sessionintead"
//app.use(cookieSession({name:"session",keys:["lama"],maxAge: 24*60*60*100}))

// This is the basic express session({..}) initialization.
app.use(session({
   secret: 'somethingsecretgoeshere',
   resave: false,
   saveUninitialized: false,
   cookie: { secure: true }
}));

// app.use(
//   cookieSession({
//     name: "google-auth-session",
//     keys: ["key1", "key2"],
//   })
// );

// init passport on every route call.
app.use(passport.initialize())

// allow passport to use "express-session".
app.use(passport.session())

//What is this for?
app.use(cors({
  origin: "http://localhost:8080",
  methods:"GET,POST,PUT,DELETE",
  credentials:true,
}))

// Routes
app.use('/auth', authRoutes)


// 404 catch all handler
app.use('*', (req, res) => {
  return res.status(404).send('Unknown Route');
});

app.use((err, req, res, next) => {
  console.log(err.message, 'what');
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { error: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  //NEED TO REQUIRE IN PORT FOR DB
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
