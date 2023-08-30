import { objectIsEmpty } from '.';

describe('objectIsEmpty', () => {
  describe('when object has keys', () => {
    const obj = {
      a: '1',
      b: '2',
    };

    it('should return false', () => {
      expect(objectIsEmpty(obj)).toBeFalsy();
    });
  });

  describe('when object is empty', () => {
    const obj = {};

    it('should return true', () => {
      expect(objectIsEmpty(obj)).toBeTruthy();
    });
  });

  describe('when object is undefined', () => {
    it('should return true', () => {
      expect(objectIsEmpty()).toBeTruthy();
    });
  });
});
