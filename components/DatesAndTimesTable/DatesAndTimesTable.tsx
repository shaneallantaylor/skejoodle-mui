import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { Grid } from '@mui/material';
import { getSelectedDatesAndTimes } from '../../atoms/SelectedAtom';
import TimePickerButton from '../TimePicker/TimePickerButton';

const style = {
  width: '100%',
  padding: 0,
  bgcolor: 'white',
};

const headerStyle = {
  width: '100%',
  bgcolor: 'white'
}

export default function DatesAndTimesTable() {
  const dates = useAtomValue(getSelectedDatesAndTimes);

  const datesAndTimes = dates.map(({ date, times }) => {
    if (dayjs.isDayjs(date)) {
      return (
        <Grid item minWidth={160} key={dayjs(date).unix()}>
          <List sx={style} component="ul" aria-label="Times for the day">
            <ListItem sx={headerStyle}>
              <ListItemText primary={dayjs(date).format('ddd M/D')} />
            </ListItem>
            <TimePickerButton dateToUpdate={date} />
            {times.map((timeOnDay) => {
              if (dayjs.isDayjs(timeOnDay)) {
                return (
                  <ListItem divider key={dayjs(timeOnDay).unix()}>
                    <ListItemText primary={dayjs(timeOnDay).format('h:mm a')} />
                  </ListItem>
                )
              }
              return null
            })}
          </List>
        </Grid>
      )
    }
    return null
  })

  return (
    <Grid wrap='nowrap' container spacing={0}>
      {datesAndTimes}
    </Grid>
  )
}