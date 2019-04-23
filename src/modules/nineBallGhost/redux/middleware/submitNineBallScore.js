
import moment from 'moment';
import { NINE_BALL_POINT_BONUS } from '../../utills';

const SubmitNineBallScore = (state) => {
  const todaysDate = moment(moment().now).format('YYYY-MM-DD');
  const nineBallPointBonus = state.nineBallChecked ? NINE_BALL_POINT_BONUS : 0;
  const totalPoints = state.ballCount + nineBallPointBonus;
  const rackData = {
    ballCount: state.ballCount,
    rackDateTime: `${todaysDate}`,
    nineBallPocketed: state.nineBallChecked,
    nineBallBreak: state.nineBallBreak,
    totalPoints
  }
  return Object.assign({}, state, {
    ballCount: 0,
    nineBallChecked: false,
    nineBallBreak: false,
    gameScores: [...state.gameScores, rackData]
  })
}

export default SubmitNineBallScore;
