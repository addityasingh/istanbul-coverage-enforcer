const { enforce } = require('./src/enforce-coverage');

// Accept input threshold file path
// Accept input coverage file path
// execute enforce and return result
// E.g. node index.js --coverage-path="./coverage.json" --threshold-path="threshold.json"

/**
 * Enforce coverage based on threshold, or fail the process
 * @param {*} coveragePath The path of coverage file
 * @param {*} thresholdPath  The path to the coverage threshold file
 */
module.exports = enforce;