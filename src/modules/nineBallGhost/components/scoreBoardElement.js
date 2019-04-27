
import React from 'react';

const ScoreBoardElement = (props) => {
  const lifetimeData = props.lifetimeData;
  const lastGame = lifetimeData[lifetimeData.length - 1];
  return [
    <span>Game Score: {lastGame.totalScore}</span>,
    <span>Nine Ball Breaks: {lastGame.totalNineBallBreaks}</span>,
    <span>Total Break and Runs: {lastGame.totalBreakAndRuns}</span>
  ]
}

export default ScoreBoardElement;
