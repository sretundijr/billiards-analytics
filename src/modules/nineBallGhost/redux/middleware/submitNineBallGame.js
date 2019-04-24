
import DateTime from '../../../../utils/dateAndTime';
import { NINE_BALL_POINT_BONUS } from '../../utills';

const SubmitNineBallGame = (state) => {
  let totalScore = 0;
  let totalNineBallBreaks = 0;
  let totalBreakAndRuns = 0;
  state.gameScores.forEach((gameScore) => {
    totalScore += gameScore.totalPoints;
    totalNineBallBreaks += nineBallPocketed(gameScore.nineBallBreak);
    totalBreakAndRuns += nineBallPocketed(gameScore.breakAndRun)
  })
  return {
    lifetimeData: [...state.lifetimeData, {
      totalScore,
      totalNineBallBreaks,
      totalBreakAndRuns,
      gameCompletedDate: DateTime.today(),
    }],
    ballCount: 0,
    nineBallChecked: false,
    nineBallBreak: false,
    gameScores: []
  }
}

export const nineBallPocketed = (wasNineBallPocketed) => {
  return wasNineBallPocketed ? NINE_BALL_POINT_BONUS : 0;
}

export default SubmitNineBallGame;
