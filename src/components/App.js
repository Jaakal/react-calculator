import React from 'react';

import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

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