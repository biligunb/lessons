// test code - jest
const sum = require('./day7');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 100 + 22 to equal 122', () => {
  expect(sum(100, 22)).toBe(122);
});
