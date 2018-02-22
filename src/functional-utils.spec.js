const { compose } = require('./functional-utils');

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = (a) => a * a;

test('compose 2 functions and apply their output in chain', () => {
    expect(compose(
        multiply.bind(null, 4),
        sum.bind(null, 4)
    )(2)).toBe(24);
});
