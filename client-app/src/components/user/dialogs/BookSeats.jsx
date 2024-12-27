import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function BookSeats({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{ '& .MuiDialog-paper': { width: '80%' } }}
    >
      <DialogTitle>Book Ticket</DialogTitle>
      <DialogContent>
        {/* Add your content here */}
        <p>Content goes here...</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BookSeats;