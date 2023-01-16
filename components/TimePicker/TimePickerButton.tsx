import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Modal } from '@mui/material'
import TimePicker from './TimePicker';
import { useAtomValue, useSetAtom } from 'jotai';
import { isTimeModalOpen, setModalClose, setTimeModalOpen } from '../../atoms/ModalAtom';

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

export default function TimePickerButton() {
  const isOpen = useAtomValue(isTimeModalOpen);
  const openModal = useSetAtom(setTimeModalOpen);
  const closeModal = useSetAtom(setModalClose);



  return (
    <>
      <Button onClick={openModal}><span>Add Time</span><AddCircleIcon /></Button>
      <Modal
        open={isOpen}
        onClose={closeModal}
      >
        <Box sx={style}>
          <TimePicker />
        </Box>
      </Modal>
    </>
  )
}

