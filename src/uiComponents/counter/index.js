import React from 'react';
import PropTypes from 'prop-types';

import ArrowUpDownButton from '../../elements/buttons/arrowUpDownButton';

import './index.css';

const BallCounter = (props) => {
  return (
    <div className='ballCounter'>
      <ArrowUpDownButton pointUp={false} onClick={props.actions.removeFromBallCount} />
      <span className='ballCounter-ballCount'>{props.ballCount ? props.ballCount : 0}</span>
      <ArrowUpDownButton pointUp={true} onClick={props.actions.addToBallCount} />
    </div>
  )
}

export default BallCounter;

BallCounter.propTypes = {
  ballCount: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    removeFromBallCount: PropTypes.func.isRequired,
    addToBallCount: PropTypes.func.isRequired
  }),
}
