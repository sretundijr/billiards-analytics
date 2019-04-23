
import React from 'react';

const ScoreList = (props) => {
  return props.gameScores.map((score) => {
    return (
      <ol>
        {React.cloneElement(props.children, score)}
      </ol>
    )
  })
};

const ScoreListItem = (props) => {
  return (
    <li>
      {React.cloneElement(props.children, props)}
    </li>
  )
};

export default { ScoreList, ScoreListItem };
