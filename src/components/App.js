import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

import '../css/app.css';

const App = () => (
  <div id="calculator">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
