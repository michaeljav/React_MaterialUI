// import { Button } from '@mui/material/Button';
import { Box, Button, Container, Typography } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
export const App = () => {
  return (
    <Container sx={{ border: 2 }}>
      <h1>App1</h1>
      <Box
        sx={{
          border: 2,
          p: 5,
          borderColor: 'peru',
          bgcolor: '#111',
          color: 'white',
        }}
        component='span'
      >
        es mui
      </Box>
      <Button
        variant='contained'
        color='success'
        startIcon={<AddLocationIcon />}
      >
        Hola
      </Button>
    </Container>
  );
};
