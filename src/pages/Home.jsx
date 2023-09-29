import { Alert, AlertTitle, Box, Button, Collapse } from '@mui/material';
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
        <Alert
          severity='warning'
          action={
            <>
              <Button color='inherit'>Update</Button>
              <Button color='inherit'>Delete</Button>
            </>
          }
        >
          This is a warning alert — check it out!
        </Alert>
        <Alert severity='info' icon={<AddReactionIcon />} variant='outlined'>
          This is an info alert — check it out!
        </Alert>
        <Collapse in={open}>
          <Alert
            severity='success'
            onClose={() => {
              setOpen(false);
            }}
          >
            This is a success alert — check it out!
          </Alert>
        </Collapse>
      </Box>
    </>
  );
};
