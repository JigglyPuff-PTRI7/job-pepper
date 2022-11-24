import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimePicker from './TimePicker';
import { Link } from '@mui/icons-material';

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
    : goalText = "Goal not set... set a goal (make this a link)"

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
      <Accordion
        expanded={expanded === panelNum}
        onChange={handleChange(panelNum)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panelNum}bh-content`}
          id={`${panelNum}bh-header`}
        >
          <Typography sx={{fontWeight: 'bold', width: '33%', flexShrink: 0 }}>
            {activityName}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontStyle:'italic'}}>{goalText}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Log your progress:</Typography>
          <TimePicker />
          <Typography>Resources</Typography>
          <ul>{resourceList}</ul>
        </AccordionDetails>
      </Accordion>
    )
    }
    )
    console.log(accordionSet)
  return (
    <div>
      {accordionSet}
      {/* <Accordion
        expanded={expanded === `panel${index+1}`}
        onChange={handleChange(`panel${index+1}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {activity}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Goal not set</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TimePicker />
          <Typography>Render time input here </Typography>
          <Typography>List resouces here</Typography>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Read Tech News</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Goal: 1 hour/week
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Render time input here </Typography>
          <Typography>List resouces here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Apply for jobs
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Goal time not set
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Render time input here </Typography>
          <Typography>List resouces here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Activity Name
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Render time input here </Typography>
          <Typography>List resouces here</Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
