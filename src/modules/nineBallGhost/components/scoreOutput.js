
import React from 'react';
import PropTypes from 'prop-types';

import Scores from '../../../uiComponents/scoreList/index';
import ScoreElement from './scoreElement';

const ScoreOutput = (props) => {
  props = { ...props, keyIdentifier: 'nineBallGhostListElement' };
  return (
    <Scores.ScoreList>
      <Scores.ScoreListItem {...props}>
        <ScoreElement />
      </Scores.ScoreListItem>
    </Scores.ScoreList >
  )
}

export default ScoreOutput;

ScoreOutput.propTypes = {
  props: PropTypes.object
}
