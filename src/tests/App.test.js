import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../services/renderWithRouter';
import App from '../App';

test('O primeiro link deve possuir o texto Home', () => {
  renderWithRouter(<App />);
  const homeTitle = screen.getByRole('link', { name: 'Home' });
  expect(homeTitle).toBeInTheDocument();
});
test('O primeiro link deve renderizar a página ./', () => {
  const { history } = renderWithRouter(<App />);
  const homeTitle = screen.getByRole('link', { name: 'Home' });
  userEvent.click(homeTitle);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('O segundo link deve possuir o texto About', () => {
  renderWithRouter(<App />);
  const aboutTitle = screen.getByRole('link', { name: 'About' });
  expect(aboutTitle).toBeInTheDocument();
});
test('O segundo link deve renderizar a página ./about', () => {
  const { history } = renderWithRouter(<App />);
  const aboutTitle = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutTitle);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
  renderWithRouter(<App />);
  const favoritePokemons = 'Favorite Pokémons';
  const favoriteTitle = screen.getByRole('link', { name: favoritePokemons });
  expect(favoriteTitle).toBeInTheDocument();
});
test('O terceiro link deve renderizar a página ./about', () => {
  const favoritePokemons = 'Favorite Pokémons';
  const { history } = renderWithRouter(<App />);
  const favoriteTitle = screen.getByRole('link', { name: favoritePokemons });
  userEvent.click(favoriteTitle);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('É redirecionado para a página Not Found quando uma URL é desconhecida', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/qualquerpágina');

  const notFoundTitle = screen.getByRole('heading', { name: /Page requested not/i });
  expect(notFoundTitle).toBeInTheDocument();
});
