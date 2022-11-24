import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimePicker from './TimePicker';

export default function ActivityAccordion({ activity, index }) 
{
  const panel = `panel${index + 1}`;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === `panel${index + 1}`}
        onChange={handleChange(`panel${index + 1}`)}
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
      </Accordion>
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
