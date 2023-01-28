import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { useAtomValue, useSetAtom } from 'jotai';
import { setModalClose } from '../../atoms/ModalAtom';
import { getDateToUpdate, setNewTimeOnDate as setNewTimeOnDateAtom } from '../../atoms/SelectedAtom';


export default function StaticTimePickers() {
  const [time, setTime] = useState<Dayjs | null>(
    dayjs().startOf('hour'),
  );

  const setNewTimeOnDate = useSetAtom(setNewTimeOnDateAtom);
  const closeModal = useSetAtom(setModalClose);
  const dateToUpdate = useAtomValue(getDateToUpdate)
  // dateToUpdate needs to be dynamic
  // it should be populated by WHICH "Add Time" button a user clicks on 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker
        label="Pick a time"
        value={time}
        onChange={(newTime) => {
          if (dayjs.isDayjs(newTime))
            setTime(newTime);
        }}
        renderInput={(params) => <TextField {...params} />}
        minutesStep={30}
        onAccept={() => {
          setNewTimeOnDate({
            dateToUpdate: dateToUpdate,
            timeToAdd: time
          })
          closeModal();
        }}
        componentsProps={{
          actionBar: {
            actions: ['clear', 'accept']
          }
        }}
      />
    </LocalizationProvider>
  );
}