import { ACTION_CONSTANTS } from './actions';

const initialState = () => {
  return Object.assign({
    ballCount: 0
  })
}

const NineBallGhostReducer = (state = initialState(), action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.ADD_TO_BALL_COUNT:
      return addToBallCount(state);
    case ACTION_CONSTANTS.SUBTRACT_FROM_BALL_COUNT:
      return removeFromBallCount(state)
    default:
      return state;
  }
}

export const addToBallCount = (state) => {
  return Object.assign({}, state, {
    ballCount: state.ballCount < 9 ? ++state.ballCount : state.ballCount
  })
}

export const removeFromBallCount = (state) => {
  return Object.assign({}, state, {
    ballCount: state.ballCount > 0 ? --state.ballCount : 0
  })
}

export default NineBallGhostReducer;
