import React from 'react';
import PropTypes from 'prop-types';

import '../css/display.css';

export class Display extends React.Component {
  render() {
    return (
      <div className='display'>{this.props.result}</div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string
};

Display.defaultProps = {
  result: '0'
};