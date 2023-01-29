import dayjs, { Dayjs } from "dayjs";
import { atom } from "jotai";

type SelectedDateModel = {
  date: Dayjs | null,
  times: Dayjs[],
}

const dateAtomConfig = atom<Dayjs | null>(null);

export const getDateToUpdate = atom((get) => get(dateAtomConfig));

export const setDateToUpdate = atom(null, (get, set, update) => {
  if (dayjs.isDayjs(update)) {
    return set(dateAtomConfig, update)
  }
  return set(dateAtomConfig, null)
})

const selectedAtomConfig = atom<SelectedDateModel[]>([{ date: null, times: [] }]);

export const getSelectedDatesAndTimes = atom((get) => get(selectedAtomConfig));
export const getSelectedDates = atom((get) => get(selectedAtomConfig).map((item) => item.date));

const removeNulls = (curr: SelectedDateModel) => curr.date !== null;
const sortSoonestFirstDate = (first: SelectedDateModel, second: SelectedDateModel) => {
  if (dayjs.isDayjs(first.date) && dayjs.isDayjs(second.date)) {
    return (first.date.unix() - second.date.unix())
  }
  return 0
}

const sortSoonestFirstTime = (first: Dayjs, second: Dayjs) => {
  if (dayjs.isDayjs(first) && dayjs.isDayjs(second)) {
    return (first.unix() - second.unix())
  }
  return 0
}

export const setNewDate = atom(null, (get, set, update) => {
  if (dayjs.isDayjs(update)) {
    const currentSelectedDates = get(selectedAtomConfig);
    const sanataizedSelectedDates = currentSelectedDates.filter(removeNulls);
    const sortedAndSantizedDates = [...sanataizedSelectedDates, { date: update, times: [] }].sort(sortSoonestFirstDate)
    return set(selectedAtomConfig, [...sortedAndSantizedDates])
  }
})

export const setNewTimeOnDate = atom(null, (get, set, { dateToUpdate, timeToAdd }) => {
  const currentSelectedDates = get(selectedAtomConfig);

  const newSelectionsMap = currentSelectedDates.map((entry) => {
    if (dayjs.isDayjs(entry.date) && entry.date.isSame(dateToUpdate, 'day')) {
      const sortedTimes = [...entry.times, timeToAdd].sort(sortSoonestFirstTime);
      return { date: entry.date, times: sortedTimes };
    }
    return entry
  });

  return set(selectedAtomConfig, [...newSelectionsMap])
});