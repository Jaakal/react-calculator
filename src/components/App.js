import React from 'react';

import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

import '../css/app.css';

export class App extends React.Component {
  render() {
    return (
      <div id='calculator'>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}