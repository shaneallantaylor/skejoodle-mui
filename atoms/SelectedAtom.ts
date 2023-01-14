import dayjs, { Dayjs } from "dayjs";
import { atom } from "jotai";

const dateAtomConfig = atom<Dayjs>(dayjs());

export const currentDate = atom((get) => get(dateAtomConfig));


const selectedAtomConfig = atom([{ date: {}, times: [] }]);

export const getSelectedDates = atom((get) => get(selectedAtomConfig).map((entry) => entry.date))