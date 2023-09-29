import { Container } from '@mui/material';
import { Product } from './components/Product';
import { BluCard } from './components/BluCard';

export const App = () => {
  return (
    <Container sx={{ mt: 5 }}>
      {/* <Product /> */}
      <BluCard />
    </Container>
  );
};
