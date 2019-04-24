
import { UpdateGame, UpdateLifetimeData } from '../updateGameData';
import * as LocalStorage from '../../../../../localStorage/index';

describe('updateGameData', () => {
  describe('UpdateGame', () => {
    const mockCallback = jest.fn();
    it('should call local storage and callback', () => {
      LocalStorage.saveToLocal = jest.fn();
      const result = UpdateGame({}, mockCallback);
      expect(mockCallback.mock.calls.length).toBe(1);
      expect(LocalStorage.saveToLocal.mock.calls.length).toBe(1);
    })
  });
  describe('UpdateLifetimeData', () => {
    const mockCallback = jest.fn();
    const mockReturn = { lifetimeData: [] };
    mockCallback.mockReturnValue(mockReturn);
    it('should call local storage twice and the callback', () => {
      LocalStorage.saveToLocal = jest.fn();
      const result = UpdateLifetimeData({}, mockCallback);
      expect(mockCallback.mock.calls.length).toBe(1);
      expect(LocalStorage.saveToLocal.mock.calls.length).toBe(2);
    })
  })
})