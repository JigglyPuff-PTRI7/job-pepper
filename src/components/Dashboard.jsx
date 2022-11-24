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



  return (
    <div className="dashboard">
      Dashboard.jsx
      <Container>
        <GraphView />
      </Container>
      <Container>
        <Box sx={{ width: '90%' }}>
          {sampleActivities.map((el, i)=><ActivityAccordion key={el} activity={el} index={i}/>)}
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
