import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  StaticDatePicker
} from '@mui/x-date-pickers';

import { renderStyledDay } from './DatePicker.helpers'

export default function DatePicker() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="mobile"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        renderDay={renderStyledDay}
        disablePast
      />
    </LocalizationProvider>
  )
}