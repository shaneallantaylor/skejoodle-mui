import dayjs, { Dayjs } from "dayjs";
import { atom } from "jotai";

type SelectedDateModel = {
  date: Dayjs | null,
  times: Dayjs[],
}

const dateAtomConfig = atom<Dayjs>(dayjs());

export const currentDate = atom((get) => get(dateAtomConfig));




const selectedAtomConfig = atom<SelectedDateModel[]>([{ date: null, times: [] }]);

export const getSelectedDates = atom((get) => get(selectedAtomConfig));

const removeNulls = (curr: SelectedDateModel) => curr.date !== null;
const sortSoonestFirst = (first: SelectedDateModel, second: SelectedDateModel) => {
  if (dayjs.isDayjs(first.date) && dayjs.isDayjs(second.date)) {
    return (first.date.unix() - second.date.unix())
  }
  return 0
}


export const setNewDate = atom(null, (get, set, update) => {
  if (dayjs.isDayjs(update)) {
    const currentSelectedDates = get(selectedAtomConfig);
    const sanataizedSelectedDates = currentSelectedDates.filter(removeNulls);
    const sortedAndSantizedDates = [...sanataizedSelectedDates, { date: update, times: [] }].sort(sortSoonestFirst)
    return set(selectedAtomConfig, [...sortedAndSantizedDates])
  }
}
)