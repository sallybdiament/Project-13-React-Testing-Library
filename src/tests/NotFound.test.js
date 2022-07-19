import React from 'react';
import { screen, render } from '@testing-library/react';
import { NotFound } from '../pages';

test('se a página contém um heading h2 com o texto Page requested not found 😭', () => {
  render(<NotFound />);
  const notFoundTitle = screen.getByRole('heading', { name: /Page requested not/i });
  expect(notFoundTitle).toBeInTheDocument();
});

test('se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  render(<NotFound />);
  const img = 'Pikachu crying because the page requested was not found';
  const image = screen.getByAltText(img);
  expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
