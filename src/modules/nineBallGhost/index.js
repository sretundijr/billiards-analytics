import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';
import PropTypes from 'prop-types';

import PlusButton from '../../elements/buttons/plusButton';
import ScoreInput from './components/scoreInput';
import ScoreOutput from './components/scoreOutput';
import ScoreBoard from '../../uiComponents/scoreBoard/index';
import ScoreBoardElement from './components/scoreBoardElement';
import GameHeader from '../../elements/headers/gameHeader';

import './index.css';

const NineBallGhost = (props) => {
  return (
    <div className='nineBallGhost'>
      <GameHeader
        className='nineBallGhost-headerContainer'
        headerLabel='Nine Ball Ghost'
        openGameInfo={() => { }}
      />
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
        <PlusButton className='nineBallGhost-finishGameButton' label='Finish Game' onClick={props.actions.submitGame} />
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NineBallGhost);
export { NineBallGhost }

NineBallGhost.propTypes = {
  lifetimeData: PropTypes.arrayOf(PropTypes.object),
  gameScores: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    submitScore: PropTypes.func.isRequired,
    submitGame: PropTypes.func.isRequired
  }),
}
