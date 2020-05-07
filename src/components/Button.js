import React from 'react';
import PropTypes from 'prop-types';

import '../css/button.css';

const Button = props => {
  const { name } = props;
  const { color } = props;
  const { wide } = props;

  const buttonStyle = { backgroundColor: color };

  buttonStyle.flexBasis = wide ? '50%' : '25%';

  return (
    <div className="button" style={buttonStyle}>{name}</div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#f5923e',
  wide: false,
};

export default Button;
