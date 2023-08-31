import { toQueryParams } from '.';

describe('toQueryParams', () => {
  describe('when object has keys', () => {
    const obj = {
      a: ['1'],
      b: ['2'],
      c: ['3']
    };
    const resultString = toQueryParams(obj);
    const expectedString = '?a=1&b=2&c=3';

    it('builds query param string from object', () => {
      expect(resultString).toEqual(expectedString);
    });
  });

  describe('when object is empty', () => {
    const obj = {};
    const resultString = toQueryParams(obj);
    const expectedString = '';

    it('returns empty string', () => {
      expect(resultString).toEqual(expectedString);
    });
  });
});
