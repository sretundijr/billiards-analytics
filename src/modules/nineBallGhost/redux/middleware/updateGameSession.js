
import { saveToLocal } from '../../../../localStorage/index';
import { localStorageKeys } from '../../utills';

const UpdateGame = (state, callback) => {
  const currentState = callback(state);
  saveToLocal(currentState.gameScores, localStorageKeys.NINE_BALL_GAME_SESSION)
  return currentState;
}

export default UpdateGame;
