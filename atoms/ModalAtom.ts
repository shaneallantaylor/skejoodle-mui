import { atom } from "jotai";

const modalAtomConfig = atom({ isOpen: false, modalType: '' });

export const isDateModalOpen = atom((get) => {
  const atomValue = get(modalAtomConfig);
  return atomValue.isOpen && atomValue.modalType === 'date';
})

export const isTimeModalOpen = atom((get) => {
  const atomValue = get(modalAtomConfig);
  return atomValue.isOpen && atomValue.modalType === 'time';
})

export const isModalOpen = atom((get) => get(modalAtomConfig).isOpen)

export const setDateModalOpen = atom(
  null,
  (get, set, update) => set(modalAtomConfig, { isOpen: true, modalType: 'date' })
);

export const setTimeModalOpen = atom(
  null,
  (get, set, update) => set(modalAtomConfig, { isOpen: true, modalType: 'time' })
)

export const setModalClose = atom(
  null,
  (get, set, update) => set(modalAtomConfig, { isOpen: false, modalType: '' })
)

