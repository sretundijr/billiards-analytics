import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './plusButton.css';

const PlusButton = (props) => {
  return (
    <button className={`${props.className} plusButton`} onClick={props.onClick} >
      <FontAwesomeIcon icon={faPlus} className='plusButton-icon' />
      {props.label ? props.label : 'I need a label'}
    </button>
  )
}

export default PlusButton;

PlusButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string
}
