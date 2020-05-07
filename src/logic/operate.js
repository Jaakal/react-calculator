const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let operationValue;

  switch (operation) {
    case '+':
      operationValue = Big(numberOne).plus(numberTwo);
      break;
    case '-':
      operationValue = Big(numberOne).minus(numberTwo);
      break;
    case '×':
      operationValue = Big(numberOne).times(numberTwo);
      break;
    case '÷':
      operationValue = parseFloat(numberTwo) === 0 ? 'Not a number' : Big(numberOne).div(numberTwo);
      break;
    default:
      operationValue = '0';
      break;
  }

  return operationValue.toString();
};

export default operate;
