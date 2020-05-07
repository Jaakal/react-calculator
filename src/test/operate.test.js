import operate from '../logic/operate';

const numberOne = 12;
const numberTwo = 6;

test('Sum operation returns correct value', () => {
  const operation = '+';
  const value = operate(numberOne, numberTwo, operation);
  expect(value).toEqual('18');
});

test('Subtract operation returns correct value', () => {
  const operation = '-';
  const value = operate(numberOne, numberTwo, operation);
  expect(value).toEqual('6');
});

test('Multiplication operation returns correct value', () => {
  const operation = '×';
  const value = operate(numberOne, numberTwo, operation);
  expect(value).toEqual('72');
});

test('Subtract operation returns correct value', () => {
  const operation = '÷';
  const value = operate(numberOne, numberTwo, operation);
  expect(value).toEqual('2');
});
