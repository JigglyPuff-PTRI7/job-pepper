//build the backend server
//setup express with express-graphql
//create schema file w/ queries and mutations
//mutations means that we are building a response that is changing the data in some way (POST, UPDATE, DELETE)
//implement json server
//MOCK REST API - in this case will act as our DB, so think POSTGRESQL here
//crud functionality
//test with graphiql
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const { mutation } = require("./graphql/mutations.js");
const { query } = require("./graphql/queries.js");
const app = express();

//define schema
const schema = new GraphQLSchema({
  query,
  mutation,
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
  return res.status(errorObj.status).json(errorObj.message);
});

//we only have one route for graphQL
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
