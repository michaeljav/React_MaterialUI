import React, { useState } from 'react';
import { NavListDrawer } from './NavListDrawer';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  {
    title: 'Home',
    path: '#',
    icon: <InboxIcon />,
  },
  {
    title: 'Login',
    path: '#login',
    icon: <DraftsIcon />,
  },
  {
    title: 'Register',
    path: '#register',
    icon: <MenuIcon />,
  },
];

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
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            edges='start'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map((item) => (
              <Button
                color='inherit'
                key={item.title}
                component='a'
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor='left'
        onClose={() => setOpen(false)}
        sx={{ display: { xs: 'flex', sm: 'none' } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};
