import React from 'react';

import BallCounter from '../../../uiComponents/counter/index';

const ScoreInput = (props) => {
  return (
    <div>
      <span>Number of Balls Pocketed</span>
      <BallCounter {...props} />
    </div>
  )
}

export default ScoreInput;
