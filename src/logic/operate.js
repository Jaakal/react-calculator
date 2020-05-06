import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  let operationValue;

  switch (operation) {
    case '+':
      operationValue = Big(numberOne) + Big(numberTwo);
      break;
    case '-':
      operationValue = Big(numberOne) - Big(numberTwo);
      break;
    case '×':
      operationValue = Big(numberOne) * Big(numberTwo);
      break;
    case '÷':
      operationValue = Big(numberOne) / Big(numberTwo);
      break;
    default:
      break;
  }

  return operationValue;
};

export default operate;
