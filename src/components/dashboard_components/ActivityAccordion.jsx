import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimePicker from './TimePicker';
import { Label, Link } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, Chip, Divider, FormControl, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function ActivityAccordion({ activitiesProps }) {
  console.log('activitiesProps', activitiesProps)
  const [activities, setActivities] = useState(activitiesProps);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let accordionSet = [];

  //for every activity the user has, create an accordion
  activities.map((activityObj, i)=>{
    //activity is an object in the activities array
    //need to pull out the activity name, logged hours, goal, and resources
    const activityName = activityObj.activity;
    const { totalHours, loggedHours, goal, resources } = activityObj 

    //panel for giving each panel unique labeling
    const panelNum = `panel${i+1}`;

    //update the supporting text with goal information
    let goalText = "";
    (goal && loggedHours) ?  goalText = `Completed ${totalHours} of ${goal} hours`
    : goalText = "You have not set a goal yet. set a goal"

    //create a list of resources to render
    const resourceList = [];
    if (resources) {
    resources.map((resourceObj, i)=>{
      console.log('resourceObj', resourceObj)
      resourceList.push(
        <li key={i}>
          <Link href={resourceObj.url} underline="none">
            {resourceObj.resource_name}
          </Link>
        </li>
      );
    })
  } else { 
    resourceList.push("You haven't added any resources.")

  } 
    console.log('resrouce list', resourceList)

    accordionSet.push(
      <Accordion key={i.toString()}
        expanded={expanded === panelNum}
        onChange={handleChange(panelNum)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panelNum}bh-content`}
          id={`${panelNum}bh-header`}
        >
          <Typography
            align="left"
            sx={{ fontWeight: 'bold', width: '33%', flexShrink: 0 }}
          >
            {activityName}
          </Typography>
          <Typography sx={{ color: '#E2C6AE', fontStyle: 'italic' }}>
            {goalText}
          </Typography>
          <EditIcon key={i} fontSize="small" sx={{ color: '#E2C6AE', marginLeft:'10px'}} onClick={console.log('clicked edit pencil')}/>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Typography>Log your progress:</Typography>
            <TimePicker />
          </Box>
          <Box align="left">
            <Typography fontWeight={'bold'}>Resources</Typography>
            <ul>{resourceList}</ul>
          </Box>
        </AccordionDetails>
      </Accordion>
    );
    }
    )
    console.log(accordionSet)
  return (
    <div>
      <Box m={3}>{accordionSet}</Box>
      
    </div>
  );
}
