import React from 'react';

import './checkBox.css'

const CheckBox = (props) => {
  return (
    <div className='checkBoxWithLabel' >
      <input
        className='checkBoxWithLabel-input'
        type='checkbox' name={props.label || ''}
        checked={props.checked}
      ></input>
      <label htmlFor={props.label || ''}>{props.label}</label>
    </div>
  )
}

export default CheckBox;
