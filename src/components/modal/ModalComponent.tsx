import React from 'react';
import { Box, Modal, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '600px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};

type ModalComponentProps ={
  open: boolean;
  handleClose: () => void;
  photo: string | null;
}

const ModalComponent:React.FC<ModalComponentProps> = ({ open, handleClose, photo }) => {
  if (!open || !photo) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <img src={photo} alt="Enlarged" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Modal>
  );
};
export default ModalComponent;
