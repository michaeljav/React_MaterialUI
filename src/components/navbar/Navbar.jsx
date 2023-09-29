import React, { useState } from 'react';
import { NavListDrawer } from './NavListDrawer';
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            size='large'
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
        <NavListDrawer />
      </Drawer>
    </>
  );
};
