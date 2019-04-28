
import React from 'react';

import './index.css';

const ScoreBoard = (props) => {
  return (
    <div className='scoreBoard' >
      <h3 className='scoreBoard-header' >Scoreboard</h3>
      <span>{props.label}</span>
      <div className='scoreBoard-scoreElementContainer' >
        {props.children}
      </div>
    </div>
  )
}

export default ScoreBoard;
