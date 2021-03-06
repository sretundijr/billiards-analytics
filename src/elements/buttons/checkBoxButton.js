import React from 'react';

import CheckBox from '../inputs/checkBox';
import PropTypes from 'prop-types';

import './checkBoxButton.css';

const CheckBoxButton = (props) => {
  // #6FABE8
  return (
    <button
      className='checkBoxButton'
      onClick={props.onClick}
      style={{
        backgroundColor: props.checked ? '#6EAFFF' : '#95AECC'
      }}
    >
      <CheckBox {...props} />
    </button >
  )
}

export default CheckBoxButton;

CheckBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
}
