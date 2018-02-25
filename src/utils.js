const { readFileSync } = require('fs');

const pipe = (fn, ...fns) => (...args) =>
  fns.reduce((acc, fn) => fn(acc), fn(...args));

const compose = (...fns) => pipe(...fns.reverse());

const readParsedJSON = compose(JSON.parse, readFileSync);

module.exports = {
  compose,
  readParsedJSON,
};
