import { useContext } from "react";
import { useSetAtom } from "jotai";

import { setModalClose } from "../../atoms/ModalAtom";

import { Button, Grid } from "@mui/material";
import { PickersActionBarProps } from '@mui/x-date-pickers/PickersActionBar';
import { WrapperVariantContext } from '@mui/x-date-pickers/internals';

export default function TimePickerActionsBar(props: PickersActionBarProps) {
  const {
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    actions
  } = props;
  const wrapperVariant = useContext(WrapperVariantContext);
  const closeModal = useSetAtom(setModalClose);

  const actionsArray =
    typeof actions === 'function' ? actions(wrapperVariant) : actions;

  if (actionsArray == null || actionsArray.length === 0) {
    return null;
  }

  const buttons = actionsArray.map(actionType => {
    switch (actionType) {
      case 'clear':
        return (
          <Button
            onClick={() => {
              closeModal()
              onClear()
            }}
            key={actionType}>Clear</Button>
        );
      case 'cancel':
        return (
          <Button
            onClick={() => {
              closeModal()
              onCancel()
            }}
            key={actionType}
          >Cancel</Button>
        )
      case 'accept':
        return (
          <Button
            onClick={() => {
              closeModal()
              onAccept()
            }}
            key={actionType}
          >Accept</Button>
        );
      case 'today':
        return (
          <Button
            onClick={() => {
              closeModal()
              onSetToday()
            }}
            key={actionType}
          >Today</Button>
        );
      default:
        return null;
    }
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      {buttons}
    </Grid>
  )
};