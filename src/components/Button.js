import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  render() {
    return (
      <div className='button'>{this.props.name}</div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};