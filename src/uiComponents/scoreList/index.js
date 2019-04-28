
import React from 'react';
import PropTypes from 'prop-types';

const ScoreList = (props) => {
  return (
    <ol>
      {props.children}
    </ol>
  )
};

const ScoreListItem = (props) => {
  return props.gameScores.map((score, index) => {
    return (
      <li key={`${props.keyIdentifier}-${index}`} >
        {React.cloneElement(props.children, score)}
      </li>
    )
  })
};

export default { ScoreList, ScoreListItem };

ScoreList.propTypes = {
  props: PropTypes.object
}

ScoreListItem.propTypes = {
  gameScores: PropTypes.arrayOf(PropTypes.object),
  keyIdentifier: PropTypes.string.isRequired
}
