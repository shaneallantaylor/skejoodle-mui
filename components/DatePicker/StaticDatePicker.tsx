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
import DatePickerActionsBar from './DatePickerActionsBar';
import { setNewDate as setNewDateAtom, getSelectedDates } from '../../atoms/SelectedAtom';
import { useAtomValue, useSetAtom } from 'jotai';

export default function DatePicker() {
  const [value, setValue] = useState<Dayjs | null>(dayjs().startOf('day'));
  const setNewDate = useSetAtom(setNewDateAtom);
  const userSelectedDates = useAtomValue(getSelectedDates);

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
          renderDay={(
            value,
            selectedDays,
            pickersDayProps
          ) => renderStyledDay(
            value,
            selectedDays,
            pickersDayProps,
            userSelectedDates
          )}
          disablePast
          onAccept={() => setNewDate(value)}
          components={{
            ActionBar: DatePickerActionsBar,
          }}
        />
      </Box>
    </LocalizationProvider>
  )
}