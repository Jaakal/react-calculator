import React from 'react';
import PropTypes from 'prop-types';

import '../css/button.css';

export class Button extends React.Component {
  render() {
    const buttonStyle = { backgroundColor: this.props.color };

    buttonStyle.flexBasis = this.props.wide ? '50%' : '25%';

    return (
      <div className='button' style={buttonStyle}>{this.props.name}</div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool
};

Button.defaultProps = {
  color: '#f5923e',
  wide: false
};