
import React from 'react';
import PropTypes from 'prop-types';

import './gameHeader.css';

const GameHeader = (props) => {
  return (
    <div className={`${props.className} gameHeader`} >
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
