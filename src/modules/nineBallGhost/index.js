import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';

import PlusButton from '../../elements/buttons/plusButton';
import ScoreInput from './components/scoreInput';

import './index.css';

const NineBallGhost = (props) => {
  return (
    <div className='nineBallGhost'>
      <div>
        Nine Ball Ghost
      </div>
      <PlusButton label='Submit Score' onClick={props.actions.submitScore} />
      <ScoreInput {...props} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NineBallGhost);
export { NineBallGhost }
