import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { useSetAtom } from 'jotai';
import { setModalClose } from '../../atoms/ModalAtom';


export default function ResponsiveTimePickers() {
  const [value, setValue] = useState<Dayjs | null>(
    dayjs().startOf('hour'),
  );

  const closeModal = useSetAtom(setModalClose);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker
        label="Pick a time"
        value={value}
        onChange={(newValue) => {
          if (dayjs.isDayjs(newValue))
            setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        minutesStep={30}
        onAccept={closeModal}
        componentsProps={{
          actionBar: {
            actions: ['clear', 'accept']
          }
        }}
      />
    </LocalizationProvider>
  );
}