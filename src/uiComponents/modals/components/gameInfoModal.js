
import React from 'react';
import PropTypes from 'prop-types';

import './css/gameInfoModal.css';

const GameInfoModal = (props) => {
  return (
    <div className='gameInfoModal'>
      {props.children}
    </div>
  )
}

export default GameInfoModal;
