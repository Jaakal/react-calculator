import Big from './big.mjs';

export const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne) + Big(numberTwo);
    case '-':
      return Big(numberOne) - Big(numberTwo);
    case '×':
      return Big(numberOne) * Big(numberTwo);
    case '÷':
      return Big(numberOne) / Big(numberTwo);
  }
}