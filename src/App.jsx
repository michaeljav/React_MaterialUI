import { Container } from '@mui/material';
import { Product } from './components/Product';
import { BluCard } from './components/BluCard';
import { Navbar } from './components/navbar/Navbar';

export const App = () => {
  return (
    <Container sx={{ mt: 5 }}>
      {/* <Product /> */}
      {/* <BluCard /> */}
      <Navbar />
    </Container>
  );
};
