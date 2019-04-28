
import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoardElement = (props) => {
  const lifetimeData = props.lifetimeData;
  const lastGame = lifetimeData[lifetimeData.length - 1];
  return (
    <React.Fragment>
      <span>Game Score: {lastGame.totalScore}</span>
      <span>Nine Ball Breaks: {lastGame.totalNineBallBreaks}</span>
      <span>Total Break and Runs: {lastGame.totalBreakAndRuns}</span>
    </React.Fragment>
  )
}

export default ScoreBoardElement;

ScoreBoardElement.propTypes = {
  lifetimeData: PropTypes.arrayOf(PropTypes.object).isRequired
}
