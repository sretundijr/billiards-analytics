import React from 'react';
import PropTypes from 'prop-types';

import BallCounter from '../../../uiComponents/counter/index';
import CheckBoxButton from '../../../elements/buttons/checkBoxButton';

import './css/scoreInput.css';

const ScoreInput = (props) => {
  return (
    <div className='scoreInput'>
      <h3 className='scoreInput-header' >Enter rack data</h3>
      <div className='scoreInput-ballCountLabel'>Number of Balls Pocketed</div>
      <BallCounter {...props} />
      <div className='scoreInput-checkboxContainer'>
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
    </div>
  )
}

export default ScoreInput;

ScoreInput.propTypes = {
  actions: PropTypes.shape({
    nineBallClick: PropTypes.func.isRequired,
    nineBallBreakClick: PropTypes.func.isRequired
  }),
  nineBallChecked: PropTypes.bool.isRequired,
  nineBallBreak: PropTypes.bool.isRequired
}
