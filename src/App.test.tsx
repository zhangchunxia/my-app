import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

it('renders btn anymock', () => {
  render(<App />);
  const linkElement = screen.getByText(/用mock/i);
  expect(linkElement).toBeInTheDocument();
});
