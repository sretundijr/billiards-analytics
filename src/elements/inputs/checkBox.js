import React from 'react';
import PropTypes from 'prop-types';

import './checkBox.css'

const CheckBox = (props) => {
  return (
    <div className='checkBoxWithLabel' >
      <input
        className='checkBoxWithLabel-input'
        type='checkbox' name={props.label || ''}
        checked={props.checked}
        onChange={props.onChange ? props.onChange : () => { }}
      ></input>
      <label className='checkBoxWithLabel-label' htmlFor={props.label || ''}>{props.label}</label>
    </div>
  )
}

export default CheckBox;

CheckBox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}
