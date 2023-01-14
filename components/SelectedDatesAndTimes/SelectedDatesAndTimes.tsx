import AddCircleIcon from '@mui/icons-material/AddCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { dayMocks } from '../../utils/date-mocks';
import { Box, Button, Grid, Modal } from '@mui/material'
import DatePicker from '../DatePicker';
import { isDateModalOpen, setDateModalOpen, setModalClose } from '../../atoms/ModalAtom';
import { useAtomValue, useSetAtom } from 'jotai';
;

const hey = [...dayMocks];

const dayKeys = dayMocks.map((day) =>
  day.toString()
);

const selectedDatesAndTimes = {
  [dayKeys[0]]: [
    12, 13, 15
  ],
  [dayKeys[1]]: [
    13, 14, 15
  ],
  [dayKeys[2]]: [
    12, 13, 15
  ],
}

const style = {
  width: '100%',
  padding: 0,
  bgcolor: 'background.paper',
};

const headerStyle = {
  width: '100%',
  bgcolor: 'grey'
}

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
    <div style={{ marginLeft: '30px' }}>
      <Box maxWidth={800}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <p>Here is your table</p>
          <Button onClick={openModal}><span>Add Date</span><AddCircleIcon /></Button>
        </Grid>

        <Grid wrap='nowrap' container spacing={0}>
          <Grid sx={{ borderRight: '1px solid blue' }} item minWidth={100}>
            <List sx={style} component="ul" aria-label="Times for Monday">
              <ListItem sx={headerStyle}>
                <ListItemText primary="Monday" />
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Time 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Time 2" />
              </ListItem>
              <Divider light />
              <ListItem>
                <ListItemText primary="Time 3" />
              </ListItem>
            </List>
          </Grid>
          <Grid sx={{ borderRight: '1px solid blue' }} item minWidth={100}>
            <List sx={style} component="ul" aria-label="Times for Wednesday">
              <ListItem sx={headerStyle}>
                <ListItemText primary="Wednesday" />
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Time 1" />
              </ListItem>
            </List>
          </Grid>
          <Grid sx={{ borderRight: '1px solid blue' }} item minWidth={100}>
            <List sx={style} component="ul" aria-label="Times for Friday">
              <ListItem sx={headerStyle}>
                <ListItemText primary="Friday" />
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Time 1" />
              </ListItem>
            </List>
          </Grid>
          <Grid item minWidth={100}>
            <List sx={style} component="ul" aria-label="times for Tuesday">
              <ListItem sx={headerStyle}>
                <ListItemText primary="Tuesday" />
              </ListItem>
              <Divider />
              <ListItem divider>
                <ListItemText primary="Time 1" />
              </ListItem>
              <Divider light />
              <ListItem>
                <ListItemText primary="Time 2" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
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
    </div>
  )
}

