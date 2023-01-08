import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { dayMocks } from '../../utils/date-mocks';
import { Box, Button, Grid } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';
import DatePicker from '../DatePicker';
;

const hey = [...dayMocks];

const dayKeys = dayMocks.map((day) =>
  day.toString()
);

const selectedDatesAndTimes = {
  [dayKeys[0]]: [
    12, 13, 15
  ],
  [dayKeys[1]]: [
    13, 14, 15
  ],
  [dayKeys[2]]: [
    12, 13, 15
  ],
}

const style = {
  width: '100%',
  padding: 0,
  bgcolor: 'background.paper',
};

const headerStyle = {
  width: '100%',
  bgcolor: 'grey'
}



export default function SelectedDatesAndTimes() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  // For every DAY there is a column

  console.log('selectedDatesAndTimes is', selectedDatesAndTimes);
  return (
    <div style={{ marginLeft: '30px' }}>
      <Box minHeight={300} />
      <p>Here is your table</p>

      <Grid wrap='nowrap' container spacing={0}>
        <Grid sx={{ borderRight: '1px solid blue' }} item minWidth={100}>
          <List sx={style} component="ul" aria-label="Times for Monday">
            <ListItem sx={headerStyle}>
              <ListItemText primary="Monday" />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText primary="Time 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Time 2" />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary="Time 3" />
            </ListItem>
          </List>
        </Grid>
        <Grid sx={{ borderRight: '1px solid blue' }} item minWidth={100}>
          <List sx={style} component="ul" aria-label="Times for Wednesday">
            <ListItem sx={headerStyle}>
              <ListItemText primary="Wednesday" />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText primary="Time 1" />
            </ListItem>
          </List>
        </Grid>
        <Grid sx={{ borderRight: '1px solid blue' }} item minWidth={100}>
          <List sx={style} component="ul" aria-label="Times for Friday">
            <ListItem sx={headerStyle}>
              <ListItemText primary="Friday" />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText primary="Time 1" />
            </ListItem>
          </List>
        </Grid>
        <Grid item minWidth={100}>
          <List sx={style} component="ul" aria-label="times for Tuesday">
            <ListItem sx={headerStyle}>
              <ListItemText primary="Tuesday" />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText primary="Time 1" />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary="Time 2" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box minHeight={300} />
      <Button onClick={handleToggle}>Add Date <AddCircleIcon /></Button>
      <Backdrop

        open={open}
        // onClick={() => console.log('you clicked on the backdrop!')}
        onClick={handleToggle}
      >
        <DatePicker />
      </Backdrop>
    </div>
  )
}

