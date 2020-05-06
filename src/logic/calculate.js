import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = data;

  switch (buttonName) {
    case 'AC':
      newData.total = 0;
      break;
    case '+/-':
      newData.total *= -1;
      break;
    case '%':
      newData.total = operate(data.total, 100, '÷');
      break;
    default:
      newData.total = operate(data.total, data.next, data.operation);
      break;
  }

  newData.next = 0;

  return newData;
};

export default calculate;
