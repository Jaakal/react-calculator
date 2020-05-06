import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import App from '../components/App';

test('renders template text', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const dom = render(<App />);
  const calculator = getById(dom.container, 'calculator');
  expect(calculator).toBeInTheDocument();
});
