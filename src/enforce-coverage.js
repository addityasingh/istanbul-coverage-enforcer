const istanbul = require('istanbul');
const fs = require('fs');
const { exec } = require('child_process');
const checker = require('istanbul-threshold-checker');

const { compose } = require('./functional-utils.js');
const { GLOBAL } = require('./constants');

const collector = new istanbul.Collector();

const generateCoverage = () => {
  const { stdout, stderr } = exec(`npm run coverage`);
};

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
const getCoverageStatus = results => [
  results,
  results.reduce((pass = true, current) => pass && !current[GLOBAL]['failed']),
];

const updateCoverageThreshold = (currentCoverage, thresholdPath) =>
  fs.writeFileSync(thresholdPath, JSON.stringify(currentCoverage), {
    encoding: 'UTF-8',
  });

const checkAndUpdateCoverage = (results, pass) => {
  if (!pass) {
    process.nextTick(() => {
      console.error('[ERROR]: Coverage threshold fails');
      process.exit(1);
    });
  } else {
    compose(updateCoverageThreshold, convertResultToThreshold)(results);
  }
};

const readCoverageDetails = (coveragePath) => fs.readFileSync(coveragePath, 'UTF8');
const readThresholdDetails = (thresholdPath) => fs.readFileSync(thresholdPath, 'UTF8');

const enforce = (coveragePath, thresholdPath) => compose(
  res => checkAndUpdateCoverage(...res),
  getCoverageStatus,
  checker.checkFailures.bind(null, readThresholdDetails(thresholdPath)),
  () => collector.getFinalCoverage(),
  res => collector.add(res),
  JSON.parse,
  () => readCoverageDetails(coveragePath),
  generateCoverage
);

exports.enforce = enforce;
module.exports = {
  convertResultToThreshold,
};