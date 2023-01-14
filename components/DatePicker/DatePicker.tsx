import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  StaticDatePicker
} from '@mui/x-date-pickers';

import { renderStyledDay } from './DatePicker.helpers'
import { Box } from '@mui/material';
import { useSetAtom } from 'jotai';
import { setModalClose } from '../../atoms/ModalAtom';

export default function DatePicker() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const closeModal = useSetAtom(setModalClose);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box maxWidth={400}>
        <StaticDatePicker
          displayStaticWrapperAs="mobile"
          label="Pick a day"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          renderDay={renderStyledDay}
          onAccept={closeModal}
          disablePast
        />
      </Box>
    </LocalizationProvider>
  )
}