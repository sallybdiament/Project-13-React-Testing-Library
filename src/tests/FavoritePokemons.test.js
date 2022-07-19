import React from 'react';
import { render, screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';

test('exibe a msg No favorite pokemon found, se não tem pokémons favoritos', () => {
  render(<FavoritePokemons />);
  const text = screen.getByText('No favorite pokemon found');
  expect(text).toBeInTheDocument();
});
