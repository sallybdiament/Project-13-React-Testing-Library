import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

test('título summery e pikachu details deve aparecer na página ./pokemons/25', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');
  const titleDetail = screen.getByRole('heading', { name: 'Pikachu Details' });
  expect(titleDetail).toBeInTheDocument();
  const summaryTitle = screen.getByRole('heading', { name: 'Summary' });
  expect(summaryTitle).toBeInTheDocument();
  const image = screen.getAllByAltText('Pikachu location');
  expect(image[0].src).toContain('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
});

test('O checkbox de favorito deve renderizar na página ./pokemons/25', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');
  const labelCheckbox = screen.getByRole('checkbox');
  expect(labelCheckbox).toBeInTheDocument();
});
