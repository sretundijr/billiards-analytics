
import React from 'react';
import PropTypes from 'prop-types';

import HelpButton from '../buttons/helpButton';
import CloseButton from '../buttons/closeButton';

import './gameHeader.css';

const GameHeader = (props) => {
  return (
    <div className={`${props.className} gameHeader`} >
      {getButtonType(props)}
      <h2>
        {props.headerLabel}
      </h2>
    </div>
  )
}

const getButtonType = (props) => {
  if (props.openGameInfo) {
    return <HelpButton
      onClick={props.openGameInfo}
      className='gameHeader-button'
    />
  } else if (props.closeButton) {
    return <CloseButton
      className='gameHeader-button'
      onClick={props.closeButton}
    />
  }
  return null;
}

export default GameHeader;

GameHeader.propTypes = {
  headerLabel: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
