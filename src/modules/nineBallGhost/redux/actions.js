
export const ACTION_CONSTANTS = {
  ADD_TO_BALL_COUNT: 'ADD_TO_BALL_COUNT',
  SUBTRACT_FROM_BALL_COUNT: 'SUBTRACT_FROM_BALL_COUNT'
};

const createAction = (constant, data) => ({ type: constant, data });

const addToBallCount = () => {
  return (dispatch) => {
    dispatch(createAction(ACTION_CONSTANTS.ADD_TO_BALL_COUNT, null))
  }
}

const removeFromBallCount = () => {
  return (dispatch) => {
    dispatch(createAction(ACTION_CONSTANTS.SUBTRACT_FROM_BALL_COUNT, null))
  }
}

export default {
  addToBallCount,
  removeFromBallCount
};
