import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './calculator';

test('renders template text', () => {
  const { getByText } = render(<Calculator />);
  const textElement = getByText(/going to become an awesome calculator!/i);
  expect(textElement).toBeInTheDocument();
});
