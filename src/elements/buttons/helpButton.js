
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import './helpButton.css'

const HelpIconButton = (props) => {
  return (
    <button className={`${props.className} helpButton`} >
      <FontAwesomeIcon className='helpButton-helpIcon' icon={faQuestionCircle} />
    </button>
  )
}

export default HelpIconButton;

HelpIconButton.propTypes = {
  className: PropTypes.string
}
