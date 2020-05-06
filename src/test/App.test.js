import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import App from '../components/App';

let getById;
let getByClass;

beforeAll(() => {
  getById = queryByAttribute.bind(null, 'id');
  getByClass = queryByAttribute.bind(null, 'class');
});

test('renders App component', () => {
  const dom = render(<App />);
  const calculator = getById(dom.container, 'calculator');
  expect(calculator).toBeInTheDocument();
});

test('renders Display component', () => {
  const dom = render(<App />);
  const display = getByClass(dom.container, 'display');
  expect(display).toBeInTheDocument();
});

test('renders ButtonPanel component', () => {
  const dom = render(<App />);
  const buttonPanel = getByClass(dom.container, 'button-panel');
  expect(buttonPanel).toBeInTheDocument();
});
