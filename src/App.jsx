// import { Button } from '@mui/material/Button';
import { Box, Button, Container, Typography } from '@mui/material';

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
      <Button variant='contained'>Hola</Button>
    </Container>
  );
};
