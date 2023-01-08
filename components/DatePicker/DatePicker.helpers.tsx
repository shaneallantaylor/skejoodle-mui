import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';

const daysUserHasAlreadySelected =
  [dayjs('Mon, 09 Jan 2023 08:00:00 GMT'),
  dayjs('Wed, 11 Jan 2023 08:00:00 GMT'),
  dayjs('Mon, 16 Jan 2023 08:00:00 GMT')
  ];

export function renderStyledDay(
  day: Dayjs,
  selectedDays: Dayjs[],
  pickersDayProps: PickersDayProps<Dayjs>
) {
  let userHasAlreadySelected;

  for (const userSelectedDay of daysUserHasAlreadySelected) {
    if (day.isSame(userSelectedDay)) {
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
    color: 'red',
    background: 'black'
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