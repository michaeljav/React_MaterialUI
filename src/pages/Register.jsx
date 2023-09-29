import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

export const Register = () => {
  const [formValue, setFormValue] = useState({ email: '' });
  const handleChange = (e) => {
    // console.log(e);
    // console.log(e.target.id);
    // console.log(e.target.name, e.target.value);
    // console.log(formValue);
    setFormValue((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit1 ', formValue);
  };

  return (
    <>
      <h1>Register</h1>
      <Box component='form' /*onSubmit={handleSubmit}*/>
        <TextField
          id='email'
          label='Email'
          type='email'
          variant='outlined'
          fullWidth
          helperText='Ingrese un email valido'
          error={false}
          // name='email'
          value={formValue.email}
          onChange={handleChange}
        />
        {/* <Button type='submit' variant='outlined' sx={{ mt: 2 }}>
          Register
        </Button> */}

        <Button onClick={handleSubmit} variant='outlined' sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </>
  );
};
