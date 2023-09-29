import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  Snackbar,
} from '@mui/material';
import React, { useState } from 'react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
export const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: 'grid', gap: '1rem' }}>
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          This is an error alert — check it out!
        </Alert>

        <Snackbar open={open} message='Alert SnackBar'></Snackbar>
      </Box>
    </>
  );
};
