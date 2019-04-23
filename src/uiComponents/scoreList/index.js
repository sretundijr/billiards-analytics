
import React from 'react';

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
      <li key={`${props.keyIndentifier}-${index}`} >
        {React.cloneElement(props.children, score)}
      </li>
    )
  })
};

export default { ScoreList, ScoreListItem };
