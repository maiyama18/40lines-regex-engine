const { matchOne, match } = require('./index');

describe('matchOne', () => {
  const testCases = [
    ['a', 'a', true],
    ['a', 'b', false],
    ['a', '', false],
    ['', '', true],
    ['', 'a', true],
    ['.', 'a', true],
  ];

  testCases.forEach(([pattern, text, expected]) => {
    test(`${pattern}-${text}: ${expected}`, () => {
      expect(matchOne(pattern, text)).toBe(expected);
    });
  });
});

describe('match for the same length pattern and text', () => {
  const testCases = [
    ['a', 'a', true],
    ['abc', 'abc', true],
    ['ab', 'bc', false],
    ['a.c', 'abc', true],
  ];

  testCases.forEach(([pattern, text, expected]) => {
    test(`${pattern}-${text}: ${expected}`, () => {
      expect(match(pattern, text)).toBe(expected);
    });
  });
});
