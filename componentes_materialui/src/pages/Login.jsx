import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';

export const Login = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('Suscribete con michael', {
      variant: 'success',
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
    });
  };

  return (
    <>
      <h1>Login</h1>
      <Button variant='contained' onClick={handleClick}>
        Open
      </Button>
    </>
  );
};
