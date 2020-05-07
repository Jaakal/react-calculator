import React from 'react';
import PropTypes from 'prop-types';

import '../css/button.css';

let tabIndex = 0;

const Button = props => {
  const {
    name, color, wide, clickHandler,
  } = props;
  const buttonStyle = { backgroundColor: color };

  buttonStyle.flexBasis = wide ? '50%' : '25%';

  const handleClick = () => {
    clickHandler(name);
  };

  const handleKeyDown = () => {};

  tabIndex += 1;

  return (
    <div role="button" tabIndex={tabIndex} onClick={handleClick} onKeyDown={handleKeyDown} className="button" style={buttonStyle}>{name}</div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#f5923e',
  wide: false,
};

export default Button;
