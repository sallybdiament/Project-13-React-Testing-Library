import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { Pokemon } from '../components';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

const pokemon = {
  id: 25,
  name: 'Pikachu',
  type: 'Electric',
  averageWeight: {
    value: '6.0',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Kanto Viridian Forest',
      map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
    },
    {
      location: 'Kanto Power Plant',
      map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
    },
  ],
};

it('tipo correto do pokémon deve ser mostrado na tela', () => {
  renderWithRouter(<App />);
  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType.innerHTML).toBe('Electric');
});

test('se a imagem do pokemon é exibida', () => {
  renderWithRouter(<App />);
  const image = screen.getByAltText('Pikachu sprite');
  expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

it('se o card do pokémon indicado na Pokédex contém um link', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: 'More details' });
  expect(detailsLink).toBeInTheDocument();
});

it('testa o favorito', () => {
  renderWithRouter(<Pokemon
    pokemon={ pokemon }
    isFavorite
  />);
  const image = screen.getByAltText('Pikachu is marked as favorite');
  expect(image.src).toContain('/star-icon.svg');
});

test('O link deve renderizar a página ./pokemons/25', () => {
  const { history } = renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: 'More details' });
  userEvent.click(detailsLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');
});
