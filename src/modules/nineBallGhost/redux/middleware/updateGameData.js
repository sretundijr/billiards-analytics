
import { saveToLocal } from '../../../../localStorage/index';
import { localStorageKeys } from '../../utills';

export const UpdateGame = (state, callback) => {
  const currentState = callback(state);
  saveToLocal(currentState.gameScores, localStorageKeys.NINE_BALL_GAME_SESSION)
  return currentState;
}

export const UpdateLifetimeData = (state, callback) => {
  const currentState = callback(state);
  saveToLocal(null, localStorageKeys.NINE_BALL_GAME_SESSION);
  saveToLocal(currentState.lifetimeData, localStorageKeys.NINE_BALL_GHOST_LIFETIME_DATA);
  return currentState;
}
