const istanbul = require('istanbul');
const fs = require('fs');
const checker = require('istanbul-threshold-checker');

const { compose, readParsedJSONP } = require('./utils.js');
const { GLOBAL } = require('./constants');

const collector = new istanbul.Collector();

const convertResultToThreshold = result => {
  return result.reduce(
    (acc, r) => {
      const globals = Object.assign({}, acc.global, {
        [r.type]: r.global.value,
      });
      const each = Object.assign({}, acc.each, {
        [r.type]: r.each.value,
      });

      return Object.assign({}, acc, {
        global: globals,
        each,
      });
    },
    { global: {}, each: {} }
  );
};

/**
 *
 * @param {object} results
 * @param {string} thresholdType OneOf(GLOBAL, EACH)
 */
const isCoverageFailed = results =>
  results.reduce((fail, current) => fail || current[GLOBAL]['failed'], false);

const updateCoverageThreshold = (thresholdPath, currentCoverage) => {
  fs.writeFileSync(thresholdPath, JSON.stringify(currentCoverage), {
    encoding: 'UTF-8',
  });
  return currentCoverage;
};

const checkCoverage = results => {
  if (isCoverageFailed(results)) {
    throw new Error('[ERROR]: Coverage threshold fails');
  } else {
    return results;
  }
};

const enforce = (coveragePath, thresholdPath) => {
  const coverageDetails = readParsedJSONP(coveragePath, { encoding: 'utf-8' });
  const thresholdDetails = readParsedJSONP(thresholdPath, {
    encoding: 'utf-8',
  });

  return compose(
    updateCoverageThreshold.bind(null, thresholdPath),
    convertResultToThreshold,
    checkCoverage,
    checker.checkFailures.bind(null, thresholdDetails),
    () => collector.getFinalCoverage(),
    res => collector.add(res)
  )(coverageDetails);
};

module.exports = {
  enforce,
  convertResultToThreshold,
};
