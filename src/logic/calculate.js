import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = Object.assign({}, data);

  switch (buttonName) {
    case 'AC':
      newData.total = '0';
      newData.next = '0';
      newData.operation = null;
      break;
    case '+/-':
      if (newData.total) {
        newData.total = operate(data.total, -1, '×');
      }

      if (newData.next) {
        newData.next = operate(data.next, -1, '×');
      }

      break;
    case '%':
      if (newData.total && parseFloat(newData.total) > 0) {
        newData.total = operate(data.total, 100, '÷');
      }

      if (newData.next && parseFloat(newData.next) > 0) {
        newData.next = operate(data.next, 100, '÷');
      }

      break;
    default:
      newData.total = operate(data.total, data.next, data.operation);
      newData.next = '0';
      break;
  }

  return newData;
};

export default calculate;
