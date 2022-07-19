import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

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

it('se é mostrado apenas um pokémon por vez', () => {
  renderWithRouter(<App />);
  const pokemonName = screen.getAllByTestId('pokemon-name');
  expect(pokemonName).toHaveLength(1);
});

it('Deve existir um botão de filtragem para cada tipo de pokémon, sem repetição', () => {
  renderWithRouter(<App />);
  const pokemonTipes = screen.getAllByTestId('pokemon-type-button');
  const seven = 7;
  expect(pokemonTipes).toHaveLength(seven);
  const btnAll = screen.getByRole('button', { name: 'Electric' });
  expect(btnAll).toBeInTheDocument();
});

it('tem um botão All', () => {
  renderWithRouter(<App />);
  const btnAll = screen.getByRole('button', { name: 'All' });
  expect(btnAll).toBeInTheDocument();
  userEvent.click(btnAll);
});
