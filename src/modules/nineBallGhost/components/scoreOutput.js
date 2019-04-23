
import React from 'react';

import Scores from '../../../uiComponents/scoreList/index';
import ScoreElement from './scoreElement';

const ScoreOutput = (props) => {
  return (
    <div>
      <Scores.ScoreList {...props} >
        <Scores.ScoreListItem>
          <ScoreElement />
        </Scores.ScoreListItem>
      </Scores.ScoreList>
    </div>
  )
}

export default ScoreOutput;
