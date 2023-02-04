import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Box, Button, Modal } from '@mui/material'
import DatePicker from '../DatePicker/StaticDatePicker';
import { isDateModalOpen, setDateModalOpen, setModalClose } from '../../atoms/ModalAtom';
import { useAtomValue, useSetAtom } from 'jotai';

const modalContentStyle = {
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

export default function SelectedDatesAndTimes() {
  const isOpen = useAtomValue(isDateModalOpen);
  const openModal = useSetAtom(setDateModalOpen);
  const closeModal = useSetAtom(setModalClose);

  return (
    <>
      <Button
        variant='contained'
        disableElevation
        disableFocusRipple
        disableRipple
        fullWidth
        size='large'
        onClick={openModal}
        endIcon={<AddCircleIcon />}
      >
        <span>Add Date</span>
      </Button>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalContentStyle}>
          <DatePicker />
        </Box>
      </Modal>
    </>
  )
}

