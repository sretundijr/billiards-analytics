import MockData from './mockData';
import SubmitNineBallScore from '../submitNineBallScore';

describe('nine ball score data', () => {

  const mockData = { ...MockData.emptyState };
  mockData.ballCount = 5;
  mockData.nineBallChecked = true;
  mockData.nineBallBreak = true;
  it('should return the correct value for total points', () => {
    const state = SubmitNineBallScore(mockData);
    expect(state.gameScores.length).toBe(1);
    expect(state.gameScores[0].totalPoints).toBe(6);
  });

  it('should reset values for nine ballchecked and nine ball break', () => {
    const state = SubmitNineBallScore(mockData);
    const expectedState = {
      ...MockData.emptyState,
      gameScores: state.gameScores,
      nineBallBreak: false,
      nineBallChecked: false
    };
    expect(state).toEqual(expectedState);
  });
})