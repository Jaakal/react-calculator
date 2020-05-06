import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = data;

  switch (buttonName) {
    case 'AC':
      newData.total = '0';
      newData.next = '0';
      newData.operation = undefined;
      break;
    case '+/-':
      newData.total = operate(data.total, -1, '×');
      newData.next = operate(data.next, -1, '×');
      break;
    case '%':
      newData.total = operate(data.total, 100, '÷');
      newData.next = operate(data.next, 100, '÷');
      break;
    default:
      newData.total = operate(data.total, data.next, data.operation);
      newData.next = '0';
      break;
  }

  return newData;
};

export default calculate;
