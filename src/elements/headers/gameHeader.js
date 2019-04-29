
import React from 'react';
import PropTypes from 'prop-types';

import HelpButton from '../buttons/helpButton';

import './gameHeader.css';

const GameHeader = (props) => {
  return (
    <div className={`${props.className} gameHeader`} >
      {
        props.openGameInfo &&
        <HelpButton className='gameHeader-helpButton' />
      }
      <h2>
        {props.headerLabel}
      </h2>
    </div>
  )
}

export default GameHeader;

GameHeader.propTypes = {
  headerLabel: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
