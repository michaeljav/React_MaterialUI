import { Box, Container, Typography } from '@mui/material';
import { Character } from './components/Character';
import { CharacterSkeleton } from './components/CharacterSkeleton';
import { useEffect, useState } from 'react';
import { findDOMNode } from 'react-dom';

const fakePromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 4000);
  });
// const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 4000));

export default function App() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      //esperara por 4 segundo y luego continua
      await fakePromise();
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const data = await response.json();
      console.log('el hilo dentro async siguio ');
      setCharacter(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log('el hilo fuera siguio ');
  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' textAlign='center' mb={3}>
        Rick and morty
      </Typography>
      {/* <h1>Hello World</h1> */}
      <Box sx={{ display: 'grid', gap: 2, maxWidth: 250, mx: 'auto' }}>
        {loading
          ? [1, 2, 3].map((item) => <CharacterSkeleton key={item} />)
          : character.map((character) => (
              <Character
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}

        {/* <Character /> */}
        {/* <CharacterSkeleton /> */}
      </Box>
    </Container>
  );
}
