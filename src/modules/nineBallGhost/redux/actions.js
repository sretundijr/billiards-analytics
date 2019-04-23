
import SubmitNineBallScore from './middleware/submitNineBallScore';
import UpdateGame from './middleware/updateGameSession';

export const ACTION_CONSTANTS = {
  ADD_TO_BALL_COUNT: 'ADD_TO_BALL_COUNT',
  SUBTRACT_FROM_BALL_COUNT: 'SUBTRACT_FROM_BALL_COUNT',
  NINE_BALL_CLICK: 'NINE_BALL_CLICK',
  NINE_BALL_BREAK_CLICK: 'NINE_BALL_BREAK_CLICK',
  SUBMIT_SCORE: 'SUBMIT_SCORE'
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

const nineBallClick = () => {
  return (dispatch) => {
    dispatch(createAction(ACTION_CONSTANTS.NINE_BALL_CLICK, null))
  }
}

const nineBallBreakClick = () => {
  return (dispatch) => {
    dispatch(createAction(ACTION_CONSTANTS.NINE_BALL_BREAK_CLICK, null))
  }
}

const submitScore = () => {
  return (dispatch, getState) => {
    dispatch(
      createAction(ACTION_CONSTANTS.SUBMIT_SCORE,
        UpdateGame(getState().NineBallGhostState, SubmitNineBallScore)));
  }
}

export default {
  addToBallCount,
  removeFromBallCount,
  nineBallClick,
  nineBallBreakClick,
  submitScore
};
