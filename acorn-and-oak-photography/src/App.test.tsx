import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Acorn & Oak Photography/i);
  expect(linkElement).toBeInTheDocument();
});
