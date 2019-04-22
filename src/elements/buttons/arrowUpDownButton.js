import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

import './arrowUpDownButton.css';

const ArrowUpDownButton = (props) => {
  return (
    <button className='arrowUpDownButton' onClick={props.onClick} >
      {
        <FontAwesomeIcon icon={props.pointUp ? faArrowCircleUp : faArrowAltCircleDown} />
      }
    </button>
  )
}

export default ArrowUpDownButton;
