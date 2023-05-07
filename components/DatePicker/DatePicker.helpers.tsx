import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { Dayjs } from 'dayjs';

export function renderStyledDay(
  day: Dayjs,
  selectedDays: Dayjs[],
  pickersDayProps: PickersDayProps<Dayjs>,
  userSelectedDates: (Dayjs | null)[],
) {

  let userHasAlreadySelected;

  for (const date of userSelectedDates) {
    if (day.isSame(date, 'day')) {
      userHasAlreadySelected = true;
    }
  }

  let selected;
  for (const selectedDay of selectedDays) {
    if (day.isSame(selectedDay)) {
      selected = true;
    }
  }

  const customStyles = {
    color: 'white',
    background: 'white'
  }

  return (
    <PickersDay
      {...pickersDayProps}
      selected={userHasAlreadySelected || selected}
      disabled={userHasAlreadySelected || pickersDayProps.disabled}
      style={userHasAlreadySelected ? customStyles : {}}
    />
  )
}