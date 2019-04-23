
import { ACTION_CONSTANTS } from './actions';

const initialState = () => {
  return Object.assign({
    ballCount: 0,
    nineBallChecked: false,
    nineBallBreak: false,
    gameScores: []
  })
}

const NineBallGhostReducer = (state = initialState(), action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.ADD_TO_BALL_COUNT:
      return addToBallCount(state);
    case ACTION_CONSTANTS.SUBTRACT_FROM_BALL_COUNT:
      return removeFromBallCount(state);
    case ACTION_CONSTANTS.NINE_BALL_CLICK:
      return nineBallClick(state);
    case ACTION_CONSTANTS.NINE_BALL_BREAK_CLICK:
      return nineBallBreakClick(state);
    case ACTION_CONSTANTS.SUBMIT_SCORE:
      return Object.assign({}, state, action.data)
    default:
      return state;
  }
}

export const addToBallCount = (state) => {
  return Object.assign({}, state, {
    ballCount: state.ballCount < 9 ? ++state.ballCount : state.ballCount,
    nineBallChecked: state.ballCount === 9 ? true : state.nineBallChecked
  })
}

export const removeFromBallCount = (state) => {
  const unCheckNineBall = (state.ballCount === 9 || state.ballCount === 1) ? false : state.nineBallChecked;
  return Object.assign({}, state, {
    ballCount: state.ballCount > 0 ? --state.ballCount : 0,
    nineBallChecked: unCheckNineBall
  })
}

export const nineBallClick = (state) => {
  return Object.assign({}, state, {
    nineBallChecked: !state.nineBallChecked
  })
}

export const nineBallBreakClick = (state) => {
  return Object.assign({}, state, {
    nineBallBreak: !state.nineBallBreak
  })
}



export default NineBallGhostReducer;
