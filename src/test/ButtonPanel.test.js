import React from 'react';
import { render } from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';

test('renders AC button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/AC/i);
  expect(textElement).toBeInTheDocument();
});

test('renders +/- button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/\+\/-/i);
  expect(textElement).toBeInTheDocument();
});

test('renders % button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/%/i);
  expect(textElement).toBeInTheDocument();
});

test('renders ÷ button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/÷/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 7 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/7/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 8 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/8/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 9 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/9/i);
  expect(textElement).toBeInTheDocument();
});

test('renders × button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/×/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 4 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/4/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 5 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/5/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 6 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/6/i);
  expect(textElement).toBeInTheDocument();
});

test('renders - button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/^-$/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 1 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/1/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 2 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/2/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 3 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/3/i);
  expect(textElement).toBeInTheDocument();
});

test('renders + button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/^\+$/i);
  expect(textElement).toBeInTheDocument();
});

test('renders number 0 button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/0/i);
  expect(textElement).toBeInTheDocument();
});

test('renders . button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/\./i);
  expect(textElement).toBeInTheDocument();
});

test('renders = button', () => {
  const { getByText } = render(<ButtonPanel />);
  const textElement = getByText(/=/i);
  expect(textElement).toBeInTheDocument();
});
