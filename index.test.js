const { matchOne, match, search } = require('./index');

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

describe('match', () => {
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

describe('search', () => {
  const testCases = [
    ['a', 'a', true],
    ['ab', 'abc', true],
    ['bc', 'abc', true],
    ['bac', 'abc', false],
    ['.', 'abc', true],
    ['.c', 'abc', true],
    ['bc', 'abcd', true],
  ];

  testCases.forEach(([pattern, text, expected]) => {
    test(`${pattern}-${text}: ${expected}`, () => {
      expect(search(pattern, text)).toBe(expected);
    });
  });
});

describe('?', () => {
  const testCases = [
    ['a?', 'a', true],
    ['b?', 'a', true],
    ['a?b', 'b', true],
    ['a?b', 'ab', true],
    ['a?b', 'a', false],
    ['ab?c', 'abc', true],
    ['ab?c', 'ac', true],
    ['ab?c', 'axc', false],
    ['a.?c', 'axc', true],
  ];

  testCases.forEach(([pattern, text, expected]) => {
    test(`${pattern}-${text}: ${expected}`, () => {
      expect(search(pattern, text)).toBe(expected);
    });
  });
});
