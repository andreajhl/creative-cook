import { showWithPoints } from '.';

describe('numbers', () => {
  describe('showWithPoints', () => {
    test('should show with points separator', () => {
      expect(showWithPoints(12000)).toBe('12.000');
    });

    test('returns zero if the value is null or non-existent', () => {
      expect(showWithPoints()).toBe('0');
    });
  });
});
