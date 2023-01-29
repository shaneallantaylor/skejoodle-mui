

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectedDatesAndTimes from '../SelectedDatesAndTimes';

export default function CreateAccordion() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='large' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h3'>Event Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>Title</p>
          <p>Description</p>
          <p>Location</p>
          <p>Your Timezone</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='large' />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            background: 'red',
          }}
        >
          <Typography variant='h3'>Times and Dates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SelectedDatesAndTimes />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='large' color='primary' />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant='h3'>Some Other Shit</Typography>
        </AccordionSummary>
      </Accordion>
    </>
  );
}