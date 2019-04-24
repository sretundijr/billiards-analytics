import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';

import PlusButton from '../../elements/buttons/plusButton';
import ScoreInput from './components/scoreInput';
import ScoreOutput from './components/scoreOutput';

import './index.css';

const NineBallGhost = (props) => {
  return (
    <div className='nineBallGhost'>
      <div>
        Nine Ball Ghost
      </div>
      <ScoreInput {...props} />
      <PlusButton label='Submit Score' onClick={props.actions.submitScore} />
      <div>
        <ScoreOutput gameScores={props.gameScores} />
      </div>
      {
        props.gameScores.length > 0 &&
        <PlusButton label='Finish Game' onClick={props.actions.submitGame} />
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NineBallGhost);
export { NineBallGhost }
