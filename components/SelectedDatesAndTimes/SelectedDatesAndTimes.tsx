import { Box, Grid, } from '@mui/material'

import DatePickerButton from '../DatePicker'
import DatesAndTimesTable from '../DatesAndTimesTable';

export default function SelectedDatesAndTimes() {
  return (
    <>
      <Box maxWidth={800}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <p>Here is your table</p>
          <DatePickerButton />
        </Grid>
        <DatesAndTimesTable />
      </Box >
    </>
  )
}

