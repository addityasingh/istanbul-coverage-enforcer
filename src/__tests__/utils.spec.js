const { compose } = require('../utils');

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = a => a * a;

test('compose 2 functions and apply their output in chain', () => {
  expect(compose(multiply.bind(null, 4), sum.bind(null, 4))(2)).toBe(24);
});

test('compose 1 function and apply the output in chain', () => {
  expect(compose(sum.bind(null, 4))(2)).toBe(6);
});
