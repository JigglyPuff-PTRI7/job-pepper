import React from "react";
import { Box, Paper } from "@mui/material";
import { Container } from "@mui/system";
import ActivityAccordion from "./dashboard_components/ActivityAccordion";
import GraphView from "./dashboard_components/GraphView";


const Dashboard = () => {
  const sampleActivities = [
    'Practice Algos',
    'Read Tech News',
    'Activity 3',
    'Activity 4',
  ];

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
        <Box sx={{ width: '90%' }}>
       <ActivityAccordion activities={sampleActivities}/>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
