import React, { useState } from 'react';
import { NavListDrawer } from './NavListDrawer';
import { Button, Drawer } from '@mui/material';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant='contained' onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
        <NavListDrawer />
      </Drawer>
    </>
  );
};
