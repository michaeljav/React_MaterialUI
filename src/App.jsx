// import { Button } from '@mui/material/Button';
import { Button, Container, Typography } from '@mui/material';

export const App = () => {
  return (
    <Container sx={{ border: 2 }}>
      <h1>App</h1>
      <Typography variant='h1' component='h2'>
        hola
      </Typography>
      <Typography variant='h1'>hola h1</Typography>
      <Typography variant='body1' textAlign='center' mt={5}>
        hola h1
      </Typography>
      <Button variant='contained'>mi primer boton</Button>
    </Container>
  );
};
