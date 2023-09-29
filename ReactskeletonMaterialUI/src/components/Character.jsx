import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export const Character = ({ name, image }) => {
  return (
    <Card>
      <CardMedia
        image={image}
        title='Rick San'
        sx={{ height: 250, width: 250 }}
      />
      <CardContent>
        <Typography variant='h5'>{name}</Typography>
      </CardContent>
    </Card>
  );
};
