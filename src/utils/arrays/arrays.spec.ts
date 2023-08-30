import { arrayIsEmpty } from '.';

describe('arrayIsEmpty', () => {
  test('when array has items, return false', () => {
    expect(arrayIsEmpty([1, 2, 3])).toBeFalsy();
  });

  test('when array is empty, return true', () => {
    expect(arrayIsEmpty([])).toBeTruthy();
  });
});
