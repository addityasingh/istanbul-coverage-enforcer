const { enforce } = require('./src/enforce-coverage');

/**
 * Enforce coverage based on threshold, or fail the process
 * @param {*} coveragePath The path of coverage file
 * @param {*} thresholdPath  The path to the coverage threshold file
 */
module.exports = enforce;