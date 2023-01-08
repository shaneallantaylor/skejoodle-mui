import { useState } from 'react';
import { Dayjs } from 'dayjs';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  MobileDatePicker
} from '@mui/x-date-pickers';

import { renderStyledDay } from './DatePicker.helpers'

export default function DatePicker() {
  const [value, setValue] = useState<Dayjs | null>(null);

  return (<LocalizationProvider dateAdapter={AdapterDayjs}>
    <MobileDatePicker
      label="Pick a Date!"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
      renderDay={renderStyledDay}
      disablePast
    />
  </LocalizationProvider>)
}