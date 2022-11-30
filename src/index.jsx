import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

//initialize apollo client, passing configuration object with uri (url of graphql server) and cache to store query results after fetching them
const client = new ApolloClient({
  uri: "http://localhost:3434/graphql",
  cache: new InMemoryCache(),
});
//test
// const getActivities = gql`
//   query getActivities {
//     getActivities(id: "1") {
//       activity_name
//       total_hours
//       logged_hours
//       goal
//     }
//   }
// `;
// client
//   .query({
//     query: getActivities,
//   })
//   .then((result) => console.log("test query is =>", result));
const container = document.getElementById("root");
const root = createRoot(container);
//wrapping app in apollo client allows us to access it anywhere in our component tree
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
