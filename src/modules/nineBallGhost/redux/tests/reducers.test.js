
import * as Helper from '../reducers';

describe('reducer function tests', () => {
  describe('addToBallCount', () => {
    it('should return correct ball count and nine ball checked status', () => {
      const state = {
        nineBallChecked: false,
        ballCount: 2
      }
      const result = Helper.addToBallCount(state);
      expect(result.ballCount).toBe(3);
      expect(result.nineBallChecked).toBe(false);
    });
    it('should return true for nine ball checked', () => {
      const state = {
        nineBallChecked: false,
        ballCount: 8
      }
      const result = Helper.addToBallCount(state);
      expect(result.ballCount).toBe(9);
      expect(result.nineBallChecked).toBe(true);
    });
    it('should not increment ball count past 9', () => {
      const state = {
        nineBallChecked: false,
        ballCount: 9
      }
      const result = Helper.addToBallCount(state);
      expect(result.ballCount).toBe(9);
      expect(result.nineBallChecked).toBe(true);
    })
  });
  describe('removeFromBallCount', () => {
    it('should return correct ball count and nine ball checked status', () => {
      const state = {
        nineBallChecked: false,
        ballCount: 2
      }
      const result = Helper.removeFromBallCount(state);
      expect(result.ballCount).toBe(1);
      expect(result.nineBallChecked).toBe(false);
    });
    it('should not decrement ball count beyond 0', () => {
      const state = {
        nineBallChecked: false,
        ballCount: 0
      }
      const result = Helper.removeFromBallCount(state);
      expect(result.ballCount).toBe(0);
      expect(result.nineBallChecked).toBe(false);
    });
    it('should return false for nine ball checked', () => {
      const state = {
        nineBallChecked: true,
        ballCount: 9
      }
      const result = Helper.removeFromBallCount(state);
      expect(result.ballCount).toBe(8);
      expect(result.nineBallChecked).toBe(false);
    });
  });
  describe('nineBallClick', () => {
    it('should toggle nine ball click status', () => {
      const state = {
        nineBallChecked: false,
        ballCount: 1
      };
      const result = Helper.nineBallClick(state);
      expect(result.nineBallChecked).toBe(true);
    });
    it('should toggle nine ball click status and return true for nine ball break', () => {
      const state = {
        nineBallChecked: false,
        ballCount: 0
      };
      const result = Helper.nineBallClick(state);
      expect(result.nineBallChecked).toBe(true);
      expect(result.nineBallBreak).toBe(true);
      expect(result.ballCount).toBe(1);
    });
    it('should toggle nine ball click status false', () => {
      const state = {
        nineBallChecked: true,
        ballCount: 1
      };
      const result = Helper.nineBallClick(state);
      expect(result.nineBallChecked).toBe(false);
    });
    it('should toggle nine ball click status false and return correct ball count, nine break status', () => {
      const state = {
        nineBallChecked: true,
        nineBallBreak: true,
        ballCount: 1
      };
      const result = Helper.nineBallClick(state);
      expect(result.nineBallChecked).toBe(false);
      expect(result.nineBallBreak).toBe(false);
    });
  });
  describe('nineBallBreakClick', () => {
    it('should toggle nine ball break status', () => {
      const state = {
        nineBallBreak: true
      };
      const result = Helper.nineBallBreakClick(state);
      expect(result.nineBallBreak).toBe(false);
    });
    it('should toggle nine ball break status', () => {
      const state = {
        nineBallBreak: false
      };
      const result = Helper.nineBallBreakClick(state);
      expect(result.nineBallBreak).toBe(true);
    });
  });
  describe('updateBallCountForNineBallBreak', () => {
    it('should update ball count to 1', () => {
      const ballCount = Helper.updateBallCountForNineBallBreak(0);
      expect(ballCount).toBe(1);
    });
    it('should not change ball count for any value greater then 0', () => {
      const ballCount = Helper.updateBallCountForNineBallBreak(1);
      expect(ballCount).toBe(1);
    })
  });
  describe('updateNineBallBreakStatus', () => {
    it('should return true for nine ball break', () => {
      const state = {
        ballCount: 0,
        nineBallChecked: false
      };
      const result = Helper.updateNineBallBreakStatus(state);
      expect(result).toBe(true);
    });
    it('should return false for nine ball break', () => {
      const state = {
        ballCount: 0,
        nineBallChecked: true
      };
      const result = Helper.updateNineBallBreakStatus(state);
      expect(result).toBe(false);
    });
    it('should toggle break status when ball count above 0', () => {
      const state = {
        ballCount: 1,
        nineBallChecked: true,
        nineBallBreak: true,
      };
      const result = Helper.updateNineBallBreakStatus(state);
      expect(result).toBe(false);
      state.nineBallChecked = false;
      const result2 = Helper.updateNineBallBreakStatus(state);
      expect(result2).toBe(true);
    });
  });
});

