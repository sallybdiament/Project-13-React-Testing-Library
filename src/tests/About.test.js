import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../pages';

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  render(<About />);
  const aboutPokedexTitle = screen.getByRole('heading', { name: 'About Pokédex' });
  expect(aboutPokedexTitle).toBeInTheDocument();
});

// test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
//   render(<About />);
//   const paragraphsAbout = screen.getAllByRole('paragraph');
//   expect(paragraphsAbout).toHaveLength(2);
// });

test('se a página contém a seguinte imagem de uma Pokédex', () => {
  render(<About />);
  const image = screen.getByAltText('Pokédex');
  expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
