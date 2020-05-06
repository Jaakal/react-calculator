import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import '../css/button-panel.css';

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <div className="button-panel">
      <div className="group-1">
        <Button name="AC" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="+/-" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="%" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="group-2">
        <Button name="7" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="8" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="9" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="×" clickHandler={handleClick} />
      </div>
      <div className="group-3">
        <Button name="4" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="5" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="6" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="group-4">
        <Button name="1" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="2" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="3" clickHandler={handleClick} color="#e0e0e0" />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="group-5">
        <Button name="0" clickHandler={handleClick} color="#e0e0e0" wide />
        <Button name="." clickHandler={handleClick} color="#e0e0e0" />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
