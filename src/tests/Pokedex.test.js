import React from 'react';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
// import { Pokedex } from '../pages';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

test('se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const pokTitle = screen.getByRole('heading', { name: 'Encountered pokémons' });
  expect(pokTitle).toBeInTheDocument();
});

test('é exibido o próximo pokémon quando o botão Próximo pokémon é clicado', () => {
  renderWithRouter(<App />);
  const btnNextPokemon = screen.getByTestId('next-pokemon');
  expect(btnNextPokemon).toBeInTheDocument();
  // userEvent.click(btnNextPokemon);
});

it('');
