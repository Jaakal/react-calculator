import React from 'react';
import PropTypes from 'prop-types';

import '../css/display.css';

const Display = props => {
  const { result } = props;
  return <div className="display">{result}</div>;
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
