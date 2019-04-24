
import React from 'react';

import './css/scoreElement.css';

const ScoreElement = (props) => {
  return (
    <div className='scoreElement'>
      <span>Ball Count: {props.ballCount}</span>
      <span>Total Points: {props.totalPoints}</span>
      <span>Nine Ball Pocketed: {yesOrNoString(props.nineBallPocketed)}</span>
      <span>Nine Ball Break: {yesOrNoString(props.nineBallBreak)}</span>
      <span>Break and Run: {yesOrNoString(props.breakAndRun)}</span>
    </div>
  )
}

const yesOrNoString = (isYes) => isYes ? 'Yes' : 'No'

export default ScoreElement;
