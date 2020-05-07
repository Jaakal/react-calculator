import calculate from '../logic/calculate';

const data = {};

beforeEach(() => {
  data.total = 5;
  data.next = 5;
});

test('Sum operation returns correct value', () => {
  data.operation = '+';
  const returnData = calculate(data, '=');
  expect(returnData.total).toEqual('10');
});

test('Subtract operation returns correct value', () => {
  data.operation = '-';
  const returnData = calculate(data, '=');
  expect(returnData.total).toEqual('0');
});

test('Multiplication operation returns correct value', () => {
  data.operation = '×';
  const returnData = calculate(data, '=');
  expect(returnData.total).toEqual('25');
});

test('Subtract operation returns correct value', () => {
  data.operation = '÷';
  const returnData = calculate(data, '=');
  expect(returnData.total).toEqual('1');
});

test('AC button nullifies total', () => {
  const returnData = calculate(data, 'AC');
  expect(returnData.total).toEqual('0');
});

test('AC button nullifies next', () => {
  const returnData = calculate(data, 'AC');
  expect(returnData.next).toEqual('0');
});

test('AC button sets operation undefined', () => {
  const returnData = calculate(data, 'AC');
  expect(returnData.operation).toBe(null);
});

test('+/- button sets the total sign opposite', () => {
  const returnData = calculate(data, '+/-');
  expect(returnData.total).toEqual('-5');
});

test('+/- button sets the next sign opposite', () => {
  const returnData = calculate(data, '+/-');
  expect(returnData.next).toEqual('-5');
});

test('% button turns the total to percentage based number', () => {
  const returnData = calculate(data, '%');
  expect(returnData.total).toEqual('0.05');
});

test('% button turns the next to percentage based number', () => {
  const returnData = calculate(data, '%');
  expect(returnData.next).toEqual('0.05');
});
