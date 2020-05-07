import React from 'react';

import Button from './Button';

import '../css/button-panel.css';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className="group-1">
      <Button color="#e0e0e0" name="AC" />
      <Button color="#e0e0e0" name="+/-" />
      <Button color="#e0e0e0" name="%" />
      <Button name="÷" />
    </div>
    <div className="group-2">
      <Button color="#e0e0e0" name="7" />
      <Button color="#e0e0e0" name="8" />
      <Button color="#e0e0e0" name="9" />
      <Button name="×" />
    </div>
    <div className="group-3">
      <Button color="#e0e0e0" name="4" />
      <Button color="#e0e0e0" name="5" />
      <Button color="#e0e0e0" name="6" />
      <Button name="-" />
    </div>
    <div className="group-4">
      <Button color="#e0e0e0" name="1" />
      <Button color="#e0e0e0" name="2" />
      <Button color="#e0e0e0" name="3" />
      <Button name="+" />
    </div>
    <div className="group-5">
      <Button color="#e0e0e0" wide name="0" />
      <Button color="#e0e0e0" name="." />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
