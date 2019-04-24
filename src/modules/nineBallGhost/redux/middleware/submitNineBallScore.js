
import DateTime from '../../../../utils/dateAndTime';
import { NINE_BALL_POINT_BONUS } from '../../utills';

const SubmitNineBallScore = (state) => {
  const todaysDate = DateTime.today();
  const nineBallPointBonus = state.nineBallChecked ? NINE_BALL_POINT_BONUS : 0;
  const totalPoints = state.ballCount + nineBallPointBonus;
  const rackData = {
    ballCount: state.ballCount,
    rackDateTime: `${todaysDate}`,
    nineBallPocketed: state.nineBallChecked,
    nineBallBreak: state.nineBallBreak,
    breakAndRun: wasBreakAndRun(state),
    totalPoints
  }
  return Object.assign({}, state, {
    ballCount: 0,
    nineBallChecked: false,
    nineBallBreak: false,
    gameScores: [...state.gameScores, rackData]
  })
}

export const wasBreakAndRun = (state) => {
  if (state.ballCount === 9 && !state.nineBallBreak) {
    return true;
  }
  return false;
}

export default SubmitNineBallScore;
