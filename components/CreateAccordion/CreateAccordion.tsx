

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectedDatesAndTimes from '../SelectedDatesAndTimes';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

export default function CreateAccordion() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
          <TextField margin="normal" fullWidth id="outlined-basic" label="Meeting Title" variant="outlined" />
          <TextField margin="normal" fullWidth id="outlined-basic" label="Description" variant="outlined" />
          <TextField margin="normal" fullWidth id="outlined-basic" label="Location" variant="outlined" />
          <FormControl margin="normal" fullWidth>
            <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Time Zone"
              onChange={handleChange}
            >
              <MenuItem value={'wtf'}>Pacific</MenuItem>
              <MenuItem value={'yes'}>Mountain</MenuItem>
              <MenuItem value={'dont'}>Eastern</MenuItem>
            </Select>
          </FormControl>
          <Button variant='contained'>Next</Button>
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