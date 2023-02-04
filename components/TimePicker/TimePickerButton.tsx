import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Modal } from '@mui/material'
import TimePicker from './TimePicker';
import { useAtomValue, useSetAtom } from 'jotai';
import { isTimeModalOpen, setModalClose, setTimeModalOpen } from '../../atoms/ModalAtom';
import { Dayjs } from 'dayjs';
import { setDateToUpdate as setDateToUpdateAtom } from '../../atoms/SelectedAtom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TimePickerButton({ dateToUpdate }: { dateToUpdate: Dayjs }) {
  const isOpen = useAtomValue(isTimeModalOpen);
  const openModal = useSetAtom(setTimeModalOpen);
  const closeModal = useSetAtom(setModalClose);
  const setDateToUpdate = useSetAtom(setDateToUpdateAtom);

  const handleOpenModal = () => {
    setDateToUpdate(dateToUpdate)
    openModal();
  };

  const handleOnClose = () => {
    setDateToUpdate(null)
    closeModal();
  }

  return (
    <>
      <Button
        onClick={handleOpenModal}
        endIcon={<AddCircleIcon />}
      >
        <span>Add Time</span>
      </Button>
      <Modal
        open={isOpen}
        onClose={handleOnClose}
      >
        <Box sx={style}>
          <TimePicker />
        </Box>
      </Modal>
    </>
  )
}

