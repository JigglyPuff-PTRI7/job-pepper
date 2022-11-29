//build the backend server
//setup express with express-graphql
//create schema file w/ queries and mutations
//mutations means that we are building a response that is changing the data in some way (POST, UPDATE, DELETE)
//implement json server
//MOCK REST API - in this case will act as our DB, so think POSTGRESQL here
//crud functionality
//test with graphiql

//
require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const RootMutation = require("./graphql/mutations.js");
const RootQuery = require("./graphql/queries.js");
const app = express();

//define schema
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
//one route/entrypoint to graphql
//each time a client interacting w/ our server wants to access graphql, they enter through this one route
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
const PORT = 3000;
// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
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

//Removed ---cookie-session has a known issue with "regenerate"-->use"expression-sessionintead"
//app.use(cookieSession({name:"session",keys:["lama"],maxAge: 24*60*60*100}))

app.use(
  session({
    secret:"secret-key",
    resave:false,
    saveUninitialized: false,
  })
);

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
  console.log(err.message);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { error: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

// module.exports = app
