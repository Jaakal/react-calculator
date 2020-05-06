import { operate } from './operate';

export const calculate = (data, buttonName) => {
  switch (buttonName) {
    case 'AC':
      data.total = 0;
      data.next = 0;
      break;
    case '+/-':
      data.total = operate(data.total, data.next, data.operation);
      data.total *= -1;
      data.next *= 0;
      break;
    // case '%':
    //   data.total /= 100;
    //   data.next = 0;
    //   break;
    // case 
  }
}