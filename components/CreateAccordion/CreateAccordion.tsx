import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectedDatesAndTimes from '../SelectedDatesAndTimes';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';


export default function CreateAccordion() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [timeZone, setTimeZone] = useState('');

  const [isEventInfoOpen, setIsEventInfoOpen] = useState(true);
  const [showEventInfoInSummary, setShowEventInfoInSummary] = useState(false);
  const [isDatesAndTimesOpen, setIsDatesAndTimesOpen] = useState(false);

  const handleEventInfoNextClick = () => {
    setShowEventInfoInSummary(true);
    setIsEventInfoOpen(false);
    setIsDatesAndTimesOpen(true);
  }




  const handleChange = (event: SelectChangeEvent) => {
    setTimeZone(event.target.value as string);
  };

  return (
    <>
      <Accordion
        expanded={isEventInfoOpen}
        sx={{ boxShadow: 'none' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='large' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setIsEventInfoOpen(!isEventInfoOpen)}
          sx={{ borderBottom: '1px solid black' }}
        >
          <Grid container justifyContent='space-between'>
            <Typography variant='h4'>Event Info</Typography>
            {
              showEventInfoInSummary ? (
                <Box>
                  <Typography variant='caption'>Title: {title}</Typography>
                  <Typography variant='caption'>Description: {description}</Typography>
                  <Typography variant='caption'>Location: {location}</Typography>
                  <Typography variant='caption'>Time Zone: {timeZone}</Typography>
                </Box>
              ) : null
            }
          </Grid>
        </AccordionSummary>
        <AccordionDetails sx={{ maxWidth: '600px', width: '100%' }}>
          <TextField
            margin="normal"
            fullWidth
            id="outlined-basic"
            label="Meeting Title"
            variant="outlined"
            value={title}
            onChange={({ currentTarget }) => {
              setTitle(currentTarget.value)
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={description}
            onChange={({ currentTarget }) => {
              setDescription(currentTarget.value)
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="outlined-basic"
            label="Location"
            variant="outlined"
            value={location}
            onChange={({ currentTarget }) => {
              setLocation(currentTarget.value)
            }}
          />
          <FormControl margin="normal" fullWidth>
            <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timeZone}
              label="Time Zone"
              onChange={handleChange}
            >
              <MenuItem value={'PT'}>Pacific</MenuItem>
              <MenuItem value={'MT'}>Mountain</MenuItem>
              <MenuItem value={'CT'}>Central</MenuItem>
              <MenuItem value={'ET'}>Eastern</MenuItem>
              <MenuItem value={'GMT'}>Greenwich Mean Time (London)</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant='contained'
            disableElevation
            disableFocusRipple
            disableRipple
            fullWidth
            size='large'
            endIcon={<ExpandMoreIcon fontSize='large' />}
            onClick={handleEventInfoNextClick}
          >
            Next
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion
        onClick={() => setIsDatesAndTimesOpen(!isDatesAndTimesOpen)}
        expanded={isDatesAndTimesOpen}
        sx={{ boxShadow: 'none' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='large' />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            borderBottom: '1px solid black'
          }}
        >
          <Typography variant='h4'>Dates and Times</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SelectedDatesAndTimes />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='large' color='primary' />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant='h4'>Some Other Shit</Typography>
        </AccordionSummary>
      </Accordion>
    </>
  );
}