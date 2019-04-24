import MockData from './mockData';
import SubmitNineBallScore, { wasBreakAndRun } from '../submitNineBallScore';

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

  describe('was breakAndRun fuction', () => {
    it('should return true when ball count is nine and nine ball is not pocketed', () => {
      const state = {
        ballCount: 9,
        nineBallBreak: false
      };
      const result = wasBreakAndRun(state);
      expect(result).toBe(true);
    });
    it('should return false for a nine ball break', () => {
      const state = {
        ballCount: 9,
        nineBallBreak: true
      };
      const result = wasBreakAndRun(state);
      expect(result).toBe(false);
    });
    it('should return false all balls were not pocketed', () => {
      const state = {
        ballCount: 7,
        nineBallBreak: true
      };
      const result = wasBreakAndRun(state);
      expect(result).toBe(false);
    });
  })
})