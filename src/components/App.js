import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

import '../css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
      result: '0',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    switch (buttonName) {
      case 'AC':
        {
          const newState = calculate(this.state, 'AC');
          newState.result = newState.total;
          this.setState(newState);
        }

        break;
      case '+/-':
      case '%':
        {
          const newState = calculate(this.state, buttonName);
          const { operation } = this.state;

          newState.result = operation ? newState.next : newState.total;

          if (!newState.result) {
            newState.result = '0';
          }

          this.setState(newState);
        }

        break;
      case '+':
      case '-':
      case '×':
      case '÷':
      case '=':
        {
          const { operation } = this.state;

          if (operation) {
            const newState = calculate(this.state, operation);
            newState.operation = buttonName === '=' ? null : buttonName;
            newState.result = newState.total;
            this.setState(newState);
          } else if (buttonName !== '=') {
            this.setState({
              operation: buttonName,
            });
          }
        }

        break;
      default:
        {
          const { total, next, operation } = this.state;
          let newValue;

          if (operation) {
            if (buttonName === '.') {
              newValue = next === null ? '0' : next;
            } else {
              newValue = next === null || next === '0' ? '' : next;
            }

            newValue += buttonName;

            this.setState({
              next: newValue,
              result: newValue,
            });
          } else {
            if (buttonName === '.') {
              newValue = total === null ? '0' : total;
            } else {
              newValue = total === null || total === '0' ? '' : total;
            }

            newValue += buttonName;

            this.setState({
              total: newValue,
              result: newValue,
            });
          }
        }

        break;
    }
  }

  render() {
    const { result } = this.state;

    return (
      <div id="calculator">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
