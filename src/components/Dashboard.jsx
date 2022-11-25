import React from "react";
import { Box, Button, Chip, Divider, FormControl, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ActivityAccordion from "./dashboard_components/ActivityAccordion";
import GraphView from "./dashboard_components/GraphView";


const Dashboard = ({ user, setUser }) => {
    const { name, email } = user
    const activities = user.activities

    console.log('user', user)
    console.log('activities', activities)
    
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
      <Container align="center">
        <Typography
          variant="h4"
          fontWeight="bold"
          m={2}
          sx={{ color: '#869F1C', fontFamily: 'Rohza, serif' }}
        >
          Hello, {name}
        </Typography>
        <GraphView />
        <Box sx={{ width: '90%' }}>
          <ActivityAccordion activitiesProps={activities} />
        </Box>
        <Divider mt={2}>
          <Chip label="Missing something? Add what you want to track" />
        </Divider>
        <Box m={3} sx={{ gap: '20ox' }}>
          <FormControl>
            {/* <Typography>
            Missing something? Add what you want to track:
          </Typography> */}
            <Box
              mb={2}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <TextField variant="standard" label="Add Activity"></TextField>
              <TextField
                variant="standard"
                label="Goal Hours per Week"
              ></TextField>
            </Box>
            <Button variant="outlined" size="small">
              Let's track this!
            </Button>
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
