const { matchLen } = require('./index');

test('', () => {
  expect(matchLen('hello', 'world')).toBe(-1);
});
