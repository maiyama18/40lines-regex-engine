const { matchOne } = require('./index');

describe('matchOne', () => {
  const testCases = [['a', 'a', true], ['a', 'b', false]];

  testCases.forEach(([pattern, text, expected]) => {
    test(`${pattern}-${text}: ${expected}`, () => {
      expect(matchOne(pattern, text)).toBe(expected);
    });
  });
});
