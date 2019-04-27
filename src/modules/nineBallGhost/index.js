import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';

import PlusButton from '../../elements/buttons/plusButton';
import ScoreInput from './components/scoreInput';
import ScoreOutput from './components/scoreOutput';
import ScoreBoard from '../../uiComponents/scoreBoard/index';
import ScoreBoardElement from './components/scoreBoardElement';

import './index.css';

const NineBallGhost = (props) => {
  return (
    <div className='nineBallGhost'>
      <div>
        Nine Ball Ghost
      </div>
      {
        props.lifetimeData.length > 0 &&
        <ScoreBoard label='Your previous Nine Ball Ghost Results!' >
          <ScoreBoardElement {...props} />
        </ScoreBoard>
      }
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
