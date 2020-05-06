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
      result: '0'
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
          newState.result = this.state.operation ? newState.next : newState.total;
          
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
        if (this.state.operation) {
          const newState = calculate(this.state, this.state.operation);
          newState.operation = buttonName === '=' ? null : buttonName;
          newState.result = newState.total;
          this.setState(newState);
        } else if (buttonName !== '=') {
          this.setState({
            operation: buttonName
          });
        }

        break;
      default:
        let newValue;

        if (this.state.operation) {
          if (buttonName === '.') {
            newValue = this.state.next === null ? '0' : this.state.next;
          } else {
            newValue = this.state.next === null || this.state.next === '0' ? '' : this.state.next;
          }

          newValue += buttonName;

          this.setState({
            next: newValue,
            result: newValue
          });
        } else {
          if (buttonName === '.') {
            newValue = this.state.total === null ? '0' : this.state.total;
          } else {
            newValue = this.state.total === null || this.state.total === '0'  ? '' : this.state.total;
          }

          newValue += buttonName;

          this.setState({
            total: newValue,
            result: newValue
          });
        }
        
        break;
    }
  }

  render() {
    return (
      <div id="calculator">
        <Display result={this.state.result}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
};

export default App;
