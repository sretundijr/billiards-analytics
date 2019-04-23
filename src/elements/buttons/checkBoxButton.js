import React from 'react';

import CheckBox from '../inputs/checkBox';

import './checkBoxButton.css';

const CheckBoxButton = (props) => {
  return (
    <button
      className='checkBoxButton'
      onClick={props.onClick}
      style={{
        backgroundColor: props.checked ? 'lightBlue' : 'lightGreen'
      }}
    >
      <CheckBox {...props} />
    </button >
  )
}

export default CheckBoxButton;
