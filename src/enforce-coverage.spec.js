const fs = require('fs');
const { enforce, convertResultToThreshold } = require('./enforce-coverage');

const {
  mockCoverage,
  mockCoverageResult,
  mockFailureThreshold,
  mockSuccessThreshold,
} = require('./fixtures');

test('converts coverage result to coverage threshold', () => {
  expect(convertResultToThreshold(mockCoverageResult)).toEqual(
    mockSuccessThreshold
  );
});

describe('Enforce-coverage: ', () => {
  const coveragePath = 'test/test-coverage.json';
  const failureThresholdPath = 'test/test-failure-threshold.json';
  const thresholdPath = 'test/test-coverage-threshold.json';

  beforeEach(() => {
    // Create in-memory files
    if (!fs.existsSync('test')) {
      fs.mkdirSync('test');
    }
    fs.writeFileSync(coveragePath, JSON.stringify(mockCoverage), 'UTF-8');
    fs.writeFileSync(
      failureThresholdPath,
      JSON.stringify(mockFailureThreshold),
      'UTF-8'
    );
    fs.writeFileSync(
      thresholdPath,
      JSON.stringify(mockSuccessThreshold),
      'UTF-8'
    );
  });

  afterEach(() => {
    // Cleanup
    fs.unlinkSync(coveragePath);
    fs.unlinkSync(failureThresholdPath);
    fs.unlinkSync(thresholdPath);
    fs.rmdirSync('test');
  });

  test('should convert coverage result to coverage threshold', () => {
    expect(enforce(coveragePath, thresholdPath)).toEqual(mockSuccessThreshold);
  });

  test('should fail if coverage result less than coverage threshold', () => {
    expect(() => enforce(coveragePath, failureThresholdPath)).toThrow(
      '[ERROR]: Coverage threshold fails'
    );
  });
});
