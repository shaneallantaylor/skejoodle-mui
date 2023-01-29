import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { useAtomValue, useSetAtom } from 'jotai';
import { setModalClose } from '../../atoms/ModalAtom';
import { getDateToUpdate, setNewTimeOnDate as setNewTimeOnDateAtom } from '../../atoms/SelectedAtom';
import TimePickerActionsBar from './TimePickerActionsBars';

export default function StaticTimePickers() {
  const [time, setTime] = useState<Dayjs | null>(null);
  const dateToUpdate = useAtomValue(getDateToUpdate);
  const setNewTimeOnDate = useSetAtom(setNewTimeOnDateAtom);
  const closeModal = useSetAtom(setModalClose);

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
        onAccept={(acc) => {
          if (dayjs.isDayjs(acc)) {
            setNewTimeOnDate({
              dateToUpdate: dateToUpdate,
              timeToAdd: time
            })
          }
          closeModal();
        }}
        components={{
          ActionBar: TimePickerActionsBar,
        }}
        disableIgnoringDatePartForTimeValidation={true}
        ignoreInvalidInputs={false}
      />
    </LocalizationProvider>
  );
}