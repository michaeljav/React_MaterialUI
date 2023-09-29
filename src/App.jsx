import { Container, Grid } from '@mui/material';

export const App = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, magnam
            et. Esse, aperiam voluptate sed commodi ipsa perspiciatis
            repellendus eaque ea deserunt delectus. Quibusdam odio illum quidem
            minima quam! Iste?
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, magnam
            et. Esse, aperiam voluptate sed commodi ipsa perspiciatis
            repellendus eaque ea deserunt delectus. Quibusdam odio illum quidem
            minima quam! Iste?
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};
