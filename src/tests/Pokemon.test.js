import React from 'react';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

test('tipo correto do pokémon deve ser mostrado na tela', () => {
  renderWithRouter(<App />);
  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType).toBeInTheDocument();
});

it('se o card do pokémon indicado na Pokédex contém um link', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: 'More details' });
  expect(detailsLink).toBeInTheDocument();
});
