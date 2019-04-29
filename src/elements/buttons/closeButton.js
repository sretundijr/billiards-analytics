
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './closeButton.css';

const CloseButton = (props) => {
  return (
    <button onClick={props.onClick} className={`${props.className} closeButton`} >
      <FontAwesomeIcon className='closeButton-closeIcon' icon={faTimesCircle} />
    </button>
  )
}

export default CloseButton;

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}
