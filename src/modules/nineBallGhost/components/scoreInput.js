import React from 'react';

import BallCounter from '../../../uiComponents/counter/index';
import CheckBoxButton from '../../../elements/buttons/checkBoxButton';

const ScoreInput = (props) => {
  return (
    <div>
      <span>Number of Balls Pocketed</span>
      <BallCounter {...props} />
      <CheckBoxButton
        label='Was the Nine Ball pocketed'
        onClick={props.actions.nineBallClick}
        checked={props.nineBallChecked}
      />
      {props.nineBallChecked &&
        <CheckBoxButton
          label='Was the nine ball pocketed on the break?'
          onClick={props.actions.nineBallBreakClick}
          checked={props.nineBallBreak}
        />
      }
    </div>
  )
}

export default ScoreInput;
