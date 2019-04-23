import React from 'react';

import BallCounter from '../../../uiComponents/counter/index';
import CheckBoxButton from '../../../elements/buttons/checkBoxButton';

import './css/scoreInput.css';

const ScoreInput = (props) => {
  return (
    <div className='scoreInput'>
      <div className='scoreInput-ballCountLabel'>Number of Balls Pocketed</div>
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
