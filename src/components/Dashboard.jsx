import React from "react";
import { Box, Paper } from "@mui/material";
import { Container } from "@mui/system";
import ActivityAccordion from "./dashboard_components/ActivityAccordion";
import GraphView from "./dashboard_components/GraphView";
import { useQuery, gql } from "@apollo/client";
//WILL NEED TO INCLUDE A USE EFFECT TO RUN A REQ TO getActitivities
const Dashboard = ({ user, setUser }) => {
  console.log("user is =>", user);
  // const { user_name, user_id, email } = { user };
  console.log("user still is =>", user);
  // console.log(currentUser.email);
  //GRAPHQL Client
  // const getActivities = gql`
  //   query getActivities {
  //     getActivities(id:${user_id}) {
  //       user_id
  //       user_name
  //       email
  //     }
  //   }
  // `;
  // const { loading, error, data } = useQuery(getActivities);

  // if (loading) return <p>Loading...</p>;

  // if (error) return <p>Error : {error.message}</p>;

  // console.log("data", data);
  // if (data) {
  //   console.log("data obj is ", data.getUser);
  // }

  // const activities = user.activities;

  // console.log("user", user);
  // console.log("activities", activities);

  // const sampleActivities = [
  //     'Practice Algos',
  //     'Read Tech News',
  //     'Activity 3',
  //     'Activity 4',
  // ];

  const sampleTimeLog = [];

  //add a function to fetch user activities and resources (call this function after adding and activity, logging time, or adding a resource and trigger re-render)

  //add function to add a resource

  //add a function to add an activity

  // add a function to log time

  return (
    <div className="dashboard">
      Dashboard.jsx
      <Container>
        <GraphView />
      </Container>
      <Container>
        <Box sx={{ width: "90%" }}>
          {/* <ActivityAccordion activitiesProps={activities} /> */}
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
