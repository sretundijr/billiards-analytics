
import MockData from './mockData';
import SubmitNineBallGame from '../submitNineBallGame';

describe('nine ball game data', () => {

  it('should return the correct values for total score', () => {
    const state = SubmitNineBallGame(MockData.state);
    expect(state.lifetimeData[0].totalScore).toBe(14);
  });

  it('should return correct value for nine ball breaks', () => {
    const state = SubmitNineBallGame(MockData.state);
    expect(state.lifetimeData[0].totalNineBallBreaks).toBe(1)
  });

  it('should return correct value for break and runs', () => {
    const state = SubmitNineBallGame(MockData.state);
    expect(state.lifetimeData[0].totalBreakAndRuns).toBe(1)
  });

  it('should reset state for all properties except lifetime data', () => {
    const state = SubmitNineBallGame(MockData.state);
    MockData.emptyState.lifetimeData = state.lifetimeData
    const emptyState = MockData.emptyState;
    expect(emptyState).toEqual(state);
  });
})
