import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

export const BluCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          image='https://via.placeholder.com/1000x200'
          height='200'
          alt='una description'
        />
        <CardContent>
          <Typography variant='h5'>Card Title</Typography>
          <Typography component='p' variant='body2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            adipisci exercitationem voluptatem aperiam possimus, cumque quod
            odit unde perspiciatis. Quae, eum sequi provident doloribus
            consectetur laborum quam perspiciatis nisi quasi.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained'>Add</Button>
        <Button color='error'>Remove</Button>
      </CardActions>
    </Card>
  );
};
