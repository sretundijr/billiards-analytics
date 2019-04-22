import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './plusButton.css';

const PlusButton = (props) => {
  return (
    <button className={`${props.className} plusButton`}>
      <FontAwesomeIcon icon={faPlus} />
      {props.label ? props.label : 'I need a label'}
    </button>
  )
}

export default PlusButton